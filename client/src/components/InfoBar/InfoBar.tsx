import { observer } from 'mobx-react'
import React from 'react'
import { useStores } from '../../stores/use-store';

import './style.scss'

export default observer(() => {
    const { gameStore } = useStores();

    return (
        <div className="info-bar">
            {gameStore.bankAccount.money}
            <div>toto : {gameStore.engineer.firstName}</div>
            <button onClick={() => gameStore.engineer.updateFirstName()}>update firstname</button>
        </div>
    )
})
