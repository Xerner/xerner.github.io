import { Injectable } from '@angular/core';
import { APP_SETTINGS } from '../settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  settings = APP_SETTINGS;

  constructor(

  ) { }
}
