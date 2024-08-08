import { Injectable } from "@angular/core";
import { IStar } from "../models/stars";

@Injectable({ providedIn: "root" })
export class StarsService {
  constructor() { }

  createStars(numberOfStars: number, maxWait: number, minWait: number): IStar[] {
    const deltaWait = maxWait - minWait;
    var _stars: IStar[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      var randomLeft = Math.random() * 100; //Math.floor( * window.innerWidth-32); //window.innerWidth
      var randomTop = Math.random() * 100; //Math.floor( * window.innerHeight); //window.innerHeight
      var randomWait = Math.floor(Math.random() * deltaWait + minWait);
      _stars.push({
        left: randomLeft,
        top: randomTop,
        delay: randomWait
      });
    }
    return _stars;
  }
}
