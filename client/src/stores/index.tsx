import { createContext } from "react";
import { GameStore } from "./GameStore";

export const rootStoreContext = createContext({
  gameStore: new GameStore()
});
