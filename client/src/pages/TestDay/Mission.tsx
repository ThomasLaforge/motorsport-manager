import { TestDayMission } from 'motorsport-manager_model/lib/TestDay'
import React from 'react'

interface MissionProps {
    mission: TestDayMission,
    onClick: Function
}

export default function Mission(props: MissionProps) {
    const { mission, onClick } = props

    return (
        <div className='mission' onClick={() => onClick()}>
            <div className="probabilities">
                {mission.min} - {mission.max}    
            </div>
            <div className="mission-value">
                {mission.value}%
            </div>
        </div>
    )
}
