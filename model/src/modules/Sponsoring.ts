import { makeObservable } from "mobx";
import { Game } from "./Game";

export interface Sponsor {
    name: string,
    logo?: string,
    prestige: number
}

export interface SponsorContract {
    sponsor: Sponsor,
    engagement: number, // in week
    startIncome: number,
    perRace: number,
    objectif: number, // place to beat
    objectifIncome: number
}

export class Sponsoring {

    constructor(
        public contracts: SponsorContract[] = []
    ){
        // makeObservable(this)
    }

    static getRandomContract(game: Game) : SponsorContract {
        return {
            sponsor: {
                name: 'ThomasProm',
                prestige: 3
            },
            engagement: 3,
            objectif: 10,
            objectifIncome: 1000,
            perRace: 100,
            startIncome: 2000
        }
    }
}