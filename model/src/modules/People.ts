export abstract class People {
    constructor(
        public firsName: string,
        public surname: string,
        public birthDate: Date,
    ){}

    getShortName(){
        return this.surname.substr(0, 3).toUpperCase()
    }

    getFullName(){
        return this.firsName + ' ' + this.surname
    }

    getAge(){
        return new Date().getFullYear() - this.birthDate.getFullYear()
    }
} 