import { makeObservable } from "mobx";
import { Conception } from "./definitions";
import { Brakes, FrontWing, GearBox, Motor, Part, RearWing, Suspensions } from "./Parts";

export class Car {

    constructor(
        public conception: Conception = {
            fuelConsumption: 100,
            tyreConsumption: 100
        },
        public frontWing = new FrontWing(),
        public rearWing = new RearWing(),
        public brakes = new Brakes(),
        public motor = new Motor(),
        public suspensions = new Suspensions(),
        public gearBox = new GearBox()
    ){
        // makeObservable(this)
    }

    improveTyreConsumption(newConsumption: number){
        this.conception = {
            ...this.conception,
            tyreConsumption: newConsumption
        }
    }

    improveFuelConsumption(newConsumption: number){
        this.conception = {
            ...this.conception,
            fuelConsumption: newConsumption
        }
    }

    improveConception(newConception: Conception){
        this.conception = newConception
    }

    getAveragePartPerformance(){
        return this.parts.reduce((sum, p) => sum + p.value, 0) / this.parts.length
    }

    // Get performance of car, score between 0.8 - 1.2 => +- 20% of performance on referential time of track
    getPerformance(){
        const percentPerformance = this.getAveragePartPerformance()
        return 0.8 + percentPerformance * (1.2 - 0.8)
    }

    get parts(){
        return [
            this.frontWing,
            this.rearWing,
            this.suspensions,
            this.brakes,
            this.motor,
            this.gearBox,
            this.brakes
        ]
    }

}