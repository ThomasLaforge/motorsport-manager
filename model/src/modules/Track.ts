import { Car } from "./Car";
import { Setup } from "./definitions";
import { Driver } from "./Driver";

export class Track {
    constructor(
        public referenceTime: number,
        public nbTurns: number,

    ) {}

    getLapTime(car: Car, driver: Driver, currentSetup: Setup){
        return this.referenceTime
    }
}