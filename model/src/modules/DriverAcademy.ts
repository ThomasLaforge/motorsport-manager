import { makeObservable } from "mobx";
import { DRIVER_ACADEMY_COST_EACH_YEAR, DRIVE_ACADEMY_COST_FOREACH_YEARS_USED } from "./definitions";
import { Driver } from "./Driver";

export class DriverAcademy {
    constructor(
        public used = 0,
        public drivers: Driver[] = []
    ){
        makeObservable(this)
    }

    getYearFees(){
        return this.used * DRIVE_ACADEMY_COST_FOREACH_YEARS_USED + DRIVER_ACADEMY_COST_EACH_YEAR
    }

    progress(){
        this.drivers.forEach(d => {
            d.academyProgress()
        })
    }

    startNewYear(drivers: Driver[]){
        this.used++
        this.drivers = drivers
    }
}