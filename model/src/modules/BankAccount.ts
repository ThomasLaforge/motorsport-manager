import { action, computed, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"
import { DEFAULT_START_MONEY } from "./definitions"

export class BankAccount {
    @persist @observable public money = DEFAULT_START_MONEY
    
    constructor(){
        makeObservable(this)
    }

    @action
    pay(amount: number){
        this.money -= amount
    }

    @action
    add(amount: number){
        this.money += amount
    }

    isNegative(){
        return this.money < 0
    }
}