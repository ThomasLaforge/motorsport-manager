import { action, makeObservable, observable } from "mobx";
import { persist } from "mobx-persist";
import { BankAccount } from "./BankAccount";
import { BuildPartSettings, DEFAULT_START_MONEY } from "./definitions";
import { Engineer } from "./Engineer";
import { Team } from "./Team";

export class Game {
    @observable 
    public team;

    @observable
    @persist('object', Engineer)
    public engineer = new Engineer('toto', 'tata', new Date(), 15)
    
    @persist('object', BankAccount) 
    @observable 
    public bankAccount;
    
    constructor(
        team = new Team(),
        bankAccount = new BankAccount()
    ){
        this.team = team
        this.bankAccount = bankAccount
        makeObservable(this)
    }

    @action
    buildPart(type: Class, settings: BuildPartSettings){
    }

}