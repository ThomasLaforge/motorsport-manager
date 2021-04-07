import { Engineer } from "./Engineer";
import { Game } from "./Game";

const game = new Game()
const toto = new Engineer('toto', 'lala', new Date(Date.now() - 10 * 365 *  24 * 60 * 60 * 1000))
console.log('toto age', toto.getAge())

// let newPart = game.buildPart()
// newPart = game.buyPart()
// game.pimpCar()
// const track = TrackCollection.getRandomTrack()
// game.getTime(track, driver, car, meteo, race)
// game.getCurrentChampionship().getResults()
// game.getCurrentChampionship().getRanking()
// game.simulateRace(race, driver, track, meteo, car, preparation)