import { observer } from 'mobx-react'
import React from 'react'
import { useStores } from '../../stores/use-store';

import './style.scss'

export default observer(() => {
    const { gameStore } = useStores();

    return (
        <div className="info-bar">
            <div className="info-bar-money">
                <div className="money-logo"/>
                <div className='money-value'>{gameStore.bankAccount.money}</div>
            </div>
        </div>
    )
})
