import { ApplicationConfig, EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './components/app.routes';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_SETTINGS } from './settings/appsettings';
import { APP_INITIALIZER_PROVIDER } from './app.initializer';
import { HttpCacheStore } from '../repos/common/stores/http-cache.store';
import { HttpCacheClient } from '../repos/common/services/http-cache-client.service';
import { HttpCachingInterceptor } from '../repos/common/interceptors/caching.interceptor';
import { HTTP_CACHE_SETTINGS } from '../repos/common/interfaces';
import { MockHttpHandler } from '../repos/common/mock/http-handler';

var shouldUseCache = APP_SETTINGS.caching !== undefined && APP_SETTINGS.caching.enabled;
var shouldUseCacheInterceptor = !shouldUseCache && APP_SETTINGS.caching && APP_SETTINGS.caching.enableInterceptor;

var providers: (EnvironmentProviders | Provider)[] = [
  provideRouter(routes),
  APP_INITIALIZER_PROVIDER,
]

if (shouldUseCache) {
  providers.push(HttpCacheStore)
  providers.push({ provide: HTTP_CACHE_SETTINGS, useValue: APP_SETTINGS.caching })
  providers.push({ provide: HttpHandler, useClass: MockHttpHandler })
  providers.push({ provide: HttpClient, useClass: HttpCacheClient, deps: [HttpCacheStore] })
} else {
  providers.push(provideHttpClient(
    withInterceptorsFromDi(),
  ));
}

if (shouldUseCacheInterceptor) {
  providers.push({ provide: HTTP_INTERCEPTORS, useClass: HttpCachingInterceptor, multi: true })
}

export const appConfig: ApplicationConfig = {
  providers: providers
};
