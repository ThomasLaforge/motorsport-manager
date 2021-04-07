import { makeObservable } from "mobx";
import { Car } from "./Car";
import { Achievement, NB_DRIVER_IN_A_TEAM } from "./definitions";
import { Driver, FabricDriver } from "./Driver";
import { Mecanic } from "./Mecanic";

export class Team {
    constructor(
        public cars: Car[] = new Array(NB_DRIVER_IN_A_TEAM).fill('').map(e => new Car()),
        public drivers: Driver[] = new Array(NB_DRIVER_IN_A_TEAM).fill('').map( (e, k) => new FabricDriver().create(k)),
        public mecanics: Mecanic[] = [],
        public achievements: Achievement[] = [],
    ){
        makeObservable(this)
    }
}