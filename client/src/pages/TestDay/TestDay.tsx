import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react'
import { NB_RUN_IN_TEST_DAY } from 'motorsport-manager_model/lib/definitions'
import Button from '../../components/Button/Button'
import { useStores } from '../../stores/use-store'
import Mission from './Mission'

import './style.scss'

interface TestDayProps extends RouteComponentProps {}

export default observer( (props: TestDayProps) => {
    const { testDayStore } = useStores()
    
    return (
        <div className='page track-day'>
            <h1>Track Day</h1>
            <div className="track-day-score-bar">
                <div className="track-day-score" 
                    style={{height: testDayStore.totalMissionValues + '%'}} 
                />
                <div className="score-limit score-limit-25" />
                <div className="score-limit score-limit-50" />
                <div className="score-limit score-limit-75" />
            </div>
            <div className="run-state">
                {testDayStore.run + 1} / {NB_RUN_IN_TEST_DAY}
            </div>
            <div className="engineer-capacities-used">
                {testDayStore.totalMissionResults} / {testDayStore.driver.raceEngineer?.testDayCapacities}
            </div>
            <div className="missions">
                {testDayStore.missions.map( (m, k) => (
                    <Mission 
                        key={k} 
                        mission={m} 
                        onClick={() => !testDayStore.isFinished && testDayStore.tryMission(k)} 
                    />
                ))}
            </div>
            <Button className='btn-next-turn'
                onClick={() => testDayStore.stopRun()}
            >
                {testDayStore.isFinished 
                    ? 'Essais terminés'
                    : testDayStore.run === NB_RUN_IN_TEST_DAY - 1 
                        ? 'Terminer les essais libres'
                        : 'Passer à la séance suivante'
                }
            </Button>
        </div>
    )
})