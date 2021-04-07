import { BankAccount } from "./BankAccount";
import { BuildPartSettings } from "./definitions";
import { Team } from "./Team";

export class Game {
    constructor(
        public team = new Team(),
        public bankAccount = new BankAccount()
    ){}

    buildPart(type: Class, settings: BuildPartSettings){

    }
}