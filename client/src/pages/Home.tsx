import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import AppBar from '../components/InfoBar/InfoBar'
import { observer } from 'mobx-react'
import { useStores } from '../stores/use-store'

interface HomeProps extends RouteComponentProps {

}

export default observer((props: HomeProps) => {
    const { gameStore } = useStores()

    return (
        <div className='page home'>
            <AppBar />
            <button onClick={() => gameStore.bankAccount.add(1)}>more cash</button>
            <Link to="team">Mon équipe</Link>
        </div>
    )
})