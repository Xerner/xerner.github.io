import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AppSettingsService } from '../appsettings.service';
import { fileCache } from '../../settings/cache/cache';

/** Also see {@link HttpCacheClient} */
@Injectable({ providedIn: 'root' })
export class CacheStore {
  urlCache: Record<string, HttpResponse<any>> = {};

  constructor(
    private appSettings: AppSettingsService,
  ) { }

  loadCache() {
    if (this.appSettings.settings.caching?.cacheSource === "file") {
      console.log("Using cache from ", this.appSettings.settings.caching?.cacheSource, fileCache);
      this.urlCache = fileCache as Record<string, HttpResponse<any>>;
    }
  }

  openCache() {
    console.log(this.urlCache);
    // var json = JSON.stringify(this.urlCache, null, 2);
    // var newTab = window.open('data:text/json,' + encodeURIComponent(json), '_blank');
    // if (newTab === null) {
    //   window.alert("Failed to open new tab. Please allow popups for this site.");
    //   console.log("Failed to open new tab. Please allow popups for this site.");
    //   return;
    // }
    // newTab.focus();
  }
}
