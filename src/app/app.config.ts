import { ApplicationConfig, EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { APP_SETTINGS } from '../settings/appsettings';
import { UrlCachingInterceptor } from '../interceptors/caching.interceptor';

var providers: (EnvironmentProviders | Provider)[] = [
  provideRouter(routes),
  provideHttpClient(
    withInterceptorsFromDi(),
  ),
]

if (APP_SETTINGS.caching?.enabled || APP_SETTINGS.caching?.useCacheFile) {
  providers.push({ provide: HTTP_INTERCEPTORS, useClass: UrlCachingInterceptor, multi: true })
} else {
  providers.push({ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true })
}

export const appConfig: ApplicationConfig = {
  providers: providers
};
