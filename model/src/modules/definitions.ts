export const NB_DRIVER_IN_A_TEAM = 2
export const MIN_INITIAL_PART_RELIABILITY = 20
export const MAX_INITIAL_PART_RELIABILITY = 40
export const MIN_INITIAL_PART_VALUE = 40
export const MAX_INITIAL_PART_VALUE = 70
export const DEFAULT_START_MONEY= 7 // in million
export const DRIVER_ACADEMY_COST_EACH_YEAR = 2 // in million
export const DRIVE_ACADEMY_COST_FOREACH_YEARS_USED = 1 // in million

export interface DriverStatistics {
    Start: number,
    Speed: number,
    Turns: number,
    Concentration: number,
    Overtakes: number,
    FuelEconomy: number,
    TyreEconomy: number,
    MainRoleWished: boolean,
    salaryWished: number,
    contractPrimeWished: number,
    longTermeContractWished: boolean
}

export interface BuildPartSettings {

}

export enum FuelConsumptionLevel {
    LOW = 0,
    INITIAL = 1,
    HIGH = 2,
    EXTREME = 3
}

export enum TyreConsumptionLevel {
    LOW = 0,
    INITIAL = 1,
    HIGH = 2,
    EXTREME = 3
}

export interface Setup {
    fuelConsumption: FuelConsumptionLevel,
    tyreConsumption: TyreConsumptionLevel,
    risk: number // in percent
}

export interface Conception {
    tyreConsumption: number // percent of use per km
    fuelConsumption: number // percent of use per km
}

export interface EventDilemneChoice {
    money?: number,
    compensation: any
}

export interface EventDilemne {
    choices: EventDilemneChoice[],
    isSkippable: boolean,
}

export const countryList = ['FR', 'US', 'IT', 'GB']

export interface Achievement {
    title: string,
    date: Date
}