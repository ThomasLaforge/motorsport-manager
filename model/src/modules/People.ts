import { action, makeObservable, observable } from "mobx"
import { persist } from "mobx-persist"

export abstract class People {
    @persist @observable public firstName: string

    constructor(
        firstName: string,
        public surname: string,
        public birthDate: Date,
    ){
        this.firstName = firstName
        makeObservable(this)
    }

    getShortName(){
        return this.surname.substr(0, 3).toUpperCase()
    }

    getFullName(){
        return this.firstName + ' ' + this.surname
    }

    getAge(){
        return new Date().getFullYear() - this.birthDate.getFullYear()
    }

    @action
    updateFirstName(){
        this.firstName += 'r'
    }
} 