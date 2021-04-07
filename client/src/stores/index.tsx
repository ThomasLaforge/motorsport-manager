import { create } from "mobx-persist";
import { createContext } from "react";
import { Game as GameStore } from "motorsport-manager_model";

const gameStore = new GameStore()

const hydrate = create()
hydrate('gameStore', gameStore).then(() => console.log('gameStore has been hydrated'))

export const rootStoreContext = createContext({ gameStore });
