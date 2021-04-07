import React from 'react'
import {Engineer} from 'motorsport-manager_model'
import { Link, RouteComponentProps } from '@reach/router'

interface HomeProps extends RouteComponentProps {

}

export default function Home(props: HomeProps) {
    const engineer = new Engineer('Thomas', 'Laforge', new Date('March 4, 1992 11:30:00'))

    return (
        <div className='page home'>
            {engineer.getFullName()} a {engineer.getAge()} ans.
            <Link to="dashboard">Voir le reste de l'équipe</Link>
        </div>
    )
}
