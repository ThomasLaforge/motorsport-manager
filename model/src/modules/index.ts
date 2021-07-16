export {BankAccount} from './BankAccount'
export {Car} from './Car'
export {Driver, FabricDriver} from './Driver'
export {DriverAcademy} from './DriverAcademy'
export {Engineer} from './Engineer'
export {Game} from './Game'
export {Mecanic} from './Mecanic'
export {People} from './People'
export {Sponsoring} from './Sponsoring'
export {Team} from './Team'
export {TestDay} from './TestDay'
export {Track} from './Track'
export {
    Brakes, 
    FrontWing, 
    GearBox, 
    Motor, 
    Part, 
    RearWing, 
    Suspensions
} from './Parts'
export {
    Achievement,
    BuildPartSettings,
    Conception,
    DEFAULT_START_MONEY,
    DRIVER_ACADEMY_COST_EACH_YEAR,
    DRIVE_ACADEMY_COST_FOREACH_YEARS_USED,
    DriverStatistics,
    EventDilemne,
    EventDilemneChoice,
    FuelConsumptionLevel,
    MAX_INITIAL_PART_RELIABILITY,
    MAX_INITIAL_PART_VALUE,
    MIN_INITIAL_PART_RELIABILITY,
    MIN_INITIAL_PART_VALUE,
    NB_DRIVER_IN_A_TEAM,
    Setup,
    TyreConsumptionLevel,
    countryList
} from './definitions'

// const game = new Game()
// const toto = new Engineer('toto', 'lala', new Date(Date.now() - 10 * 365 *  24 * 60 * 60 * 1000))
// console.log('toto age', toto.getAge())

// let newPart = game.buildPart()
// newPart = game.buyPart()
// game.pimpCar()
// const track = TrackCollection.getRandomTrack()
// game.getTime(track, driver, car, meteo, race)
// game.getCurrentChampionship().getResults()
// game.getCurrentChampionship().getRanking()
// game.simulateRace(race, driver, track, meteo, car, preparation)