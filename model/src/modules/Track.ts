import { makeObservable } from "mobx";
import { Car } from "./Car";
import { Setup } from "./definitions";
import { Driver } from "./Driver";

export class Track {
    constructor(
        public referenceTime: number,
        public nbTurns: number,
    ){
        // makeObservable(this)
    }

    getLapTime(car: Car, driver: Driver, currentSetup: Setup){
        return this.referenceTime
    }
}