import { create } from "mobx-persist";
import { createContext } from "react";
import { Driver, Engineer, FabricDriver, Game as GameStore } from "motorsport-manager_model";
import { TestDay as TestDayStore } from "motorsport-manager_model";

const engineer = new Engineer('Christian', 'Horner', new Date(), 15)
const driver = new Driver(
    'Thomas', 
    'Laforge', 
    new Date(), 
    'FR', 
    FabricDriver.generateRandomDriverStatistics(), 
    FabricDriver.generateRandomDriverStatistics(),
    engineer
)


const gameStore = new GameStore()
const testDayStore = new TestDayStore(driver)

const hydrate = create()
hydrate('gameStore', gameStore).then(() => console.log('gameStore has been hydrated'))

export const rootStoreContext = createContext({ gameStore, testDayStore });
