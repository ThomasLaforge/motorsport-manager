import { makeObservable } from "mobx";
import { countryList, DriverStatistics } from "./definitions";
import { Engineer } from "./Engineer";
import { People } from "./People";

export class Driver extends People {
    constructor(
        firstName: string,
        surname: string,
        birthDate: Date,
        public country = 'France',
        public statistics: DriverStatistics,
        public potential?: DriverStatistics,
        public raceEngineer?: Engineer,
        public talentPointsToUse = 0,
    ){
        super(firstName, surname, birthDate)
        // makeObservable(this)
    }

    academyProgress(){
        this.talentPointsToUse++
    }
}

export class FabricDriver {

    static create(id: number){
        const randomStatistics = FabricDriver.generateRandomDriverStatistics()

        return new Driver(
            'driver_' + id,
            '',
            new Date(),
            countryList[Math.floor(Math.random() * (countryList.length - 1))],
            randomStatistics,
            randomStatistics,
        )
    }

    static generateRandomDriverStatistics() : DriverStatistics {
        return {
            salaryWished: Math.random() * 1000,
            Concentration: 10,
            FuelEconomy: 10,
            MainRoleWished: false,
            Overtakes: 10,
            Speed: 10,
            Start: 10,
            Turns: 10,
            TyreEconomy: 10,
            contractPrimeWished: 10,
            longTermeContractWished: false
        }
    }
}