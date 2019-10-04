import React from 'react'
import posed from 'react-pose';
import './Cube.scss'

const CubeTemplate = React.forwardRef((props, ref) => {
    return (
        <div className="Cube" ref={ref}>
            <div className="cube__face cube__face--front">front</div>
            <div className="cube__face cube__face--back">back</div>
            <div className="cube__face cube__face--right">right</div>
            <div className="cube__face cube__face--left">left</div>
            <div className="cube__face cube__face--top">top</div>
            <div className="cube__face cube__face--bottom">bottom</div>
        </div>
    )
})

const PosedCube = posed(CubeTemplate)({
    a: {
        rotateX: ({props}) => props.rotateX,
        rotateY: ({props}) => props.rotateY,
        rotateZ: ({props}) => props.rotateZ,
        transition: { type: 'spring', stiffness: 100 }
    },
    b: {
        rotateX: ({props}) => props.rotateX,
        rotateY: ({props}) => props.rotateY,
        rotateZ: ({props}) => props.rotateZ,
        transition: { type: 'spring', stiffness: 100 }
    }
});

export default class Cube extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pose: 'a',
            rotateX: 45,
            rotateY: 45,
            rotateZ: 45,
        }
    }

    // No need to be in state
    _setIntervalID;

    componentDidMount() {
        // Every second randomize the rotation vector and change the pose */
        this._setIntervalID = setInterval(() => {
            this.setState({
                pose: this.state.pose === 'a' ? 'b' : 'a',
                rotateX: Math.random() * 360,
                rotateY: Math.random() * 360,
                rotateZ: Math.random() * 360
            })
        }, 1000)
    }

    componentWillUnmount(){
        // Stop the interval above
        clearInterval(this._setIntervalID)
    }

    render() {
        const { pose } = this.state
        return (
            <PosedCube pose={pose} props={this.state}></PosedCube>
        )
    }
}