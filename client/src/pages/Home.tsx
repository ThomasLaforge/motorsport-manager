import React from 'react'
import {Engineer} from 'motorsport-manager_model'
import { Link, RouteComponentProps } from '@reach/router'

interface HomeProps extends RouteComponentProps {

}

export default function Home(props: HomeProps) {

    return (
        <div className='page home'>
            <Link to="team">Mon équipe</Link>
        </div>
    )
}
