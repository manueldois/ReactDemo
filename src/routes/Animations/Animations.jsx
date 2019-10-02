import React from 'react'
import './Animations.scss'
import Cube from './components/Cube.jsx'
import posed from 'react-pose';

const PosedCube = posed(Cube)({
    a: {
        rotateX: (props) => (Math.random() * 360),
        rotateY: (props) => (Math.random() * 360),
        transition: { type: 'spring', stiffness: 100 }
    },
    b: {
        rotateX: (props) => (Math.random() * 360),
        rotateY: (props) => (Math.random() * 360),
        transition: { type: 'spring', stiffness: 100 }
    }
});

export default class AnimationsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            pose: 'a'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ pose: this.state.pose === 'a' ? 'b' : 'a' });
        }, 1000);
    }

    render() {
        return (
            <section className="page AnimationPage">
                <h1>Animations Page</h1>
                <article name="CubeAnimation">
                    <h2>Cube rotates smoothly to a random position every second</h2>
                    <h3>Uses Pose https://popmotion.io/pose</h3>
                    <div className="cubeContainer">
                        <PosedCube pose={this.state.pose}></PosedCube>
                    </div>
                </article>
            </section>
        )
    }
}