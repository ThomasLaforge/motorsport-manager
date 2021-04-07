import { RouteComponentProps } from '@reach/router'
interface TeamProps extends RouteComponentProps {
}

export default function Team(props: TeamProps) {
    return (
        <div className='page team'>
            <h1>Mon équipe</h1>
        </div>
    )
}
