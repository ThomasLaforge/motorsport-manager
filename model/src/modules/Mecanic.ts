import { Part } from "./Parts";
import { People } from "./People";

export class Mecanic extends People {
    constructor(
        firstName: string,
        surname: string,
        birthDate: Date,
    ){
        super(firstName, surname, birthDate)
    }

    improvePart(p: Part){
        return p
    }
}