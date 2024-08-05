import { Injectable, signal } from "@angular/core";
import { APP_SETTINGS } from "../../settings/appsettings";

@Injectable({ providedIn: 'root' })
export class AppStore {
  APP_SETTINGS = APP_SETTINGS;
  shouldPlayAnimations = signal<boolean>(true);
  starMinDelay = signal<number>(500);
  starMaxDelay = signal<number>(2000);
  nameDelay = signal<number>(this.starMaxDelay() + 2000);
  starCount = signal<number>(250);
  errors = {
    apiLimitError: signal<boolean>(false),
  }

  constructor(
  ) { }
}
