import React from "react"

import './style.scss'

interface ButtonProps {
    className: string, 
    children: React.ReactNode,
    onClick?: Function
}

export default (props: ButtonProps) => {
    return (
        <div className={"btn " + props.className}
            onClick={() => props.onClick && props.onClick()}
        >
            {props.children}
        </div>
    )
}