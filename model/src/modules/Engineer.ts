import { People } from "./People";

export class Engineer extends People {

    constructor(
        firstName: string,
        surname: string,
        birthDate: Date,
    ){
        super(firstName, surname, birthDate)
    }
}