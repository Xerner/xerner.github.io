import { APP_INITIALIZER } from "@angular/core";
import { CacheStore } from "./services/stores/cache.store";
import { AppSettingsService } from "./services/appsettings.service";

export function initializeApp(appSettings: AppSettingsService, cacheStore: CacheStore) {
  return (): Promise<any> => {
    if (appSettings.settings.caching?.enabled) {
      cacheStore.loadCache();
    }
    return Promise.resolve();
  }
}

export const APP_INITIALIZER_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  multi: true,
  deps: [AppSettingsService, CacheStore],
}
