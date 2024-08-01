import { Injectable, signal } from "@angular/core";
import { IProjectCard } from "../models/project-card";
import { APP_SETTINGS } from "../settings/appsettings";
import { HttpEvent } from "@angular/common/http";
import { cache } from "../constants/cache"

@Injectable({ providedIn: 'root' })
export class AppStore {
  APP_SETTINGS = APP_SETTINGS;
  shouldPlayAnimations = signal<boolean>(true);
  starMinDelay = signal<number>(500);
  starMaxDelay = signal<number>(2000);
  nameDelay = signal<number>(this.starMaxDelay() + 2000);
  starCount = signal<number>(250);

  projectCards = signal<IProjectCard[] | null>(null);

  errors = {
    apiLimitError: signal<boolean>(false),
  }

  urlCache: Record<string, HttpEvent<any>> = {};

  constructor() {
    if (APP_SETTINGS.caching?.useCacheFile) {
      console.log("Using cache file", cache);
      this.urlCache = cache;
    }
  }
}
