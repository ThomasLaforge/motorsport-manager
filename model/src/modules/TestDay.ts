import { action, computed, makeObservable, observable } from "mobx";
import { DEFAULT_TEST_DAY_MISSIONS_NUMBER, NB_RUN_IN_TEST_DAY } from "./definitions";
import { Driver } from "./Driver";
import { Engineer } from "./Engineer";

export interface TestDayMission {
    min: number,
    max: number,
    value: number,
    result: number
}

const getInitialMissions = () => {
    return new Array()
}

export class TestDay {

    @observable public missions: TestDayMission[]
    @observable public missionsDone: TestDayMission[][]
    @observable public run: number


    constructor(
        public driver: Driver,
        missions: TestDayMission[] = [],
        public nbMissions = DEFAULT_TEST_DAY_MISSIONS_NUMBER,
        missionsDone = new Array(NB_RUN_IN_TEST_DAY).fill('').map(_ => [] as TestDayMission[]),
        run = 0
    ){
        makeObservable(this)
        if(!this.driver.raceEngineer){
            throw Error('driver need an engineer')
        }
        this.missions = missions
        this.missionsDone = missionsDone
        this.run = run
        this.completeMissionsList()
    }

    @action
    completeMissionsList(){
        const newMissions: TestDayMission[] = []
        for (let i = this.missions.length; i < this.nbMissions; i++) {
            newMissions.push(TestDay.generateMission())
        }
        this.missions = [...this.missions, ...newMissions]
    }

    @action
    tryMission(missionIndex: number){
        if(!this.isFinished){
            if(missionIndex >= this.missions.length){
                throw Error('bad mission index :' + missionIndex)
            }
            
            const mission = this.missions[missionIndex]
            const raceEngineer = this.driver.raceEngineer as Engineer
    
            if( (mission.result + this.totalMissionResults) > raceEngineer.testDayCapacities){
                this.missionsDone = this.missionsDone.map( (mList, i) => i === this.run ? [] : mList)
                this.stopRun()
            }
            else {
                // add mission 
                const missionsDone = [...this.missionsDone]
                missionsDone[this.run] = [...missionsDone[this.run], mission]
                this.missionsDone = missionsDone
            }
            this.replaceMission(missionIndex)    
        }
    }

    @action
    stopRun(){
        if(this.run < NB_RUN_IN_TEST_DAY){
            this.run++
        }
    }

    @action
    replaceMission(missionIndex: number){
        this.missions = this.missions.map((m, i) => {
            return i === missionIndex ? TestDay.generateMission() : m
        })
    }

    @computed
    get isFinished(){
        return this.totalMissionValues >= 100 || this.run >= NB_RUN_IN_TEST_DAY
    }

    static generateMission(){
        const min = Math.floor(Math.random() * 7) 
        const max = Math.floor(Math.random() * (15 - min) + min + 1)
        const middle = (max + min) / 2
        // https://www.desmos.com/calculator?lang=fr : 2x^{\frac{1}{2}}+1.4x\ +3
        const getValue = (mid: number) => Math.floor(2 * Math.sqrt(mid) + 1.4 * mid + 3)
        return {
            min,
            max,
            result: Math.floor(Math.random() * (max - min) + min),
            value: getValue(middle)
        } as TestDayMission
    }

    @computed
    get totalMissionResults(){
        console.log('get results sum', this.missionsDone)
        const run = this.isFinished ? NB_RUN_IN_TEST_DAY - 1 : this.run
        return this.missionsDone[run].reduce( (sum, m) => sum + m.result, 0)
    }

    @computed
    get totalMissionValues(){
        console.log('get values', this.missionsDone, this.missionsDone.flat())
        return this.missionsDone.flat().reduce( (sum, m) => sum + m.value, 0)
    }
    
}