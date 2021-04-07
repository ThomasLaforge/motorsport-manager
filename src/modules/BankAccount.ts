import { DEFAULT_START_MONEY } from "./definitions"

export class BankAccount {
    constructor(
        public money = DEFAULT_START_MONEY
    ){}

    pay(amount: number){
        this.money -= amount
    }

    add(amount: number){
        this.money += amount
    }

    isNegative(){
        return this.money < 0
    }
}