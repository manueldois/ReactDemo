import React from 'react'
import './LoadingButton.scss'
import posed from 'react-pose';


const StaticLoadingButton = React.forwardRef((props, ref) => {
    return (
        <button className="LoadingButton" onClick={props.onClick}>
            <img ref={ref} src="refresh.svg" alt="refresh" />
        </button>
    )
})

// When loading rotate forever until interrupeted
const PosedLoadingButton = posed(StaticLoadingButton)({
    idle: {
        rotate: 0
    },
    loading: {
        rotate: 0,
        transition: {
            type: 'keyframes',
            values: [0, 360],
            times: [0, 1],
            duration: 1000,
            loop: Infinity
        }
    }
})

export default PosedLoadingButton