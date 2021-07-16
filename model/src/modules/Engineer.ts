import { makeObservable } from "mobx";
import { People } from "./People";

export class Engineer extends People {

    constructor(
        firstName: string,
        surname: string,
        birthDate: Date,
        public testDayCapacities: number
    ){
        super(firstName, surname, birthDate)
        makeObservable(this)
    }
}