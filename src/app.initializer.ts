import { APP_INITIALIZER } from "@angular/core";
import { AppSettingsService } from "./services/appsettings.service";
import { fileCache } from "./settings/cache/cache";
import { HTTP_CACHE_SETTINGS } from "../repos/common/angular/injection-tokens/IHttpCacheSettings";
import { IHttpCache } from "../repos/common/angular/interfaces/IHttpCache";
import { HttpCacheStore } from "../repos/common/angular/stores/http-cache.store";

export function initializeApp(appSettings: AppSettingsService, cacheStore: HttpCacheStore) {
  return (): Promise<any> => {
    if (appSettings.settings.caching?.enabled) {
      cacheStore.loadCache(fileCache as IHttpCache);
    }
    return Promise.resolve();
  }
}

export const APP_INITIALIZER_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  multi: true,
  deps: [AppSettingsService, HttpCacheStore, HTTP_CACHE_SETTINGS],
}
