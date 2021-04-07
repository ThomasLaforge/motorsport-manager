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
        public maximumStatistics: DriverStatistics,
        public talentPointsToUse = 0,
        public raceEngineer?: Engineer
    ){
        super(firstName, surname, birthDate)
    }

    academyProgress(){
        this.talentPointsToUse++
    }
}

export class FabricDriver {

    create(id: number){
        const randomStatistics: DriverStatistics = {
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

        return new Driver(
            'driver_' + id,
            '',
            new Date(),
            countryList[Math.floor(Math.random() * (countryList.length - 1))],
            randomStatistics,
            randomStatistics,
        )
    }
}