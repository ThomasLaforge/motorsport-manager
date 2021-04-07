import { action, makeObservable, observable } from "mobx";

export class GameStore {
    @observable public title = 'toto';

    constructor(){
        makeObservable(this)
    }

    @action
    updateToto(){
        console.log('todo update to toto 2')
        this.title = 'toto2sd'
    }
  
}