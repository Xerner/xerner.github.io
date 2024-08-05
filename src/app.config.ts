import { ApplicationConfig, EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './components/app.routes';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_SETTINGS } from './settings/appsettings';
import { UrlCachingInterceptor } from './interceptors/caching.interceptor';
import { HttpCacheClient } from './services/http-cache-client.service';
import { MockHttpHandler } from './services/mock/http-handler';
import { APP_INITIALIZER_PROVIDER } from './app.initializer';
import { CacheStore } from './services/stores/cache.store';

var shouldUseCache = APP_SETTINGS.caching !== undefined && APP_SETTINGS.caching.enabled;
var shouldUseCacheInterceptor = !shouldUseCache && APP_SETTINGS.caching && APP_SETTINGS.caching.enableInterceptor;

var providers: (EnvironmentProviders | Provider)[] = [
  provideRouter(routes),
  APP_INITIALIZER_PROVIDER,
]

if (shouldUseCache) {
  providers.push(CacheStore)
  providers.push({ provide: HttpHandler, useClass: MockHttpHandler })
  providers.push({ provide: HttpClient, useClass: HttpCacheClient, deps: [CacheStore] })
} else {
  // providers.push({ provide: HttpClient, useClass: HttpCacheClient })
  providers.push(provideHttpClient(
    withInterceptorsFromDi(),
  ));
}

if (shouldUseCacheInterceptor) {
  providers.push({ provide: HTTP_INTERCEPTORS, useClass: UrlCachingInterceptor, multi: true })
}

export const appConfig: ApplicationConfig = {
  providers: providers
};
