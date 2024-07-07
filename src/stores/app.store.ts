import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppStore {
  shouldPlayAnimations = signal<boolean>(true);
  starMinDelay = signal<number>(500);
  starMaxDelay = signal<number>(2000);
  nameDelay = signal<number>(this.starMaxDelay() + 2000);
  starCount = signal<number>(250);
}
