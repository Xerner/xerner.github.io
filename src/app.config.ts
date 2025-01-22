import { ApplicationConfig, EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './components/app.routes';
import { withInterceptorsFromDi } from '@angular/common/http';
// import { APP_SETTINGS } from './settings/appsettings';
import { cacheSettings } from 'cache/cache.settings';
import { provideHttpCacheClient } from 'common/angular/services';

// var shouldUseCache = APP_SETTINGS.caching !== undefined && APP_SETTINGS.caching.enabled;
// var shouldUseCacheInterceptor = !shouldUseCache && APP_SETTINGS.caching && APP_SETTINGS.caching.enableInterceptor;

var providers: (EnvironmentProviders | Provider)[] = [
  provideRouter(routes),
  provideHttpCacheClient(cacheSettings, [], withInterceptorsFromDi()),
]

export const appConfig: ApplicationConfig = {
  providers: providers
};
