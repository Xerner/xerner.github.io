import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppStore {
  shouldPlayAnimations = signal<boolean>(true);
}
