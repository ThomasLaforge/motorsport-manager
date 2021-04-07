import { makeObservable } from "mobx";
import { MAX_INITIAL_PART_RELIABILITY, MAX_INITIAL_PART_VALUE, MIN_INITIAL_PART_RELIABILITY, MIN_INITIAL_PART_VALUE } from "./definitions";

export class Part {
    constructor(
        public value = Math.floor(Math.random() * (MAX_INITIAL_PART_VALUE - MIN_INITIAL_PART_VALUE) + MIN_INITIAL_PART_VALUE),
        public reliability = Math.floor(Math.random() * (MAX_INITIAL_PART_RELIABILITY - MIN_INITIAL_PART_RELIABILITY) + MIN_INITIAL_PART_RELIABILITY)
    ){
        // makeObservable(this)
    }

    is(classToTest: Class){
        return this.constructor.name === classToTest.name
    }
}

export class FrontWing extends Part {}
export class RearWing extends Part {}
export class Motor extends Part {}
export class GearBox extends Part {}
export class Brakes extends Part {}
export class Suspensions extends Part {}