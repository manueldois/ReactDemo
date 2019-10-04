import React from 'react'
import './Animations.scss'
import Cube from './components/Cube.jsx'
import UserList from './components/UserList.jsx'


export default class AnimationsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            cube_pose: 'a'
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="page AnimationPage">
                <h1>Animations Page</h1>

                <article name="CubeAnimation">
                    <h2>Cube rotates smoothly to a random position every second</h2>
                    <h3>Uses Pose https://popmotion.io/pose</h3>
                    <div className="cubeContainer">
                        <Cube></Cube>
                    </div>
                </article>

                <article name="ListAnimation">
                    <UserList></UserList>
                </article>

            </section>
        )
    }
}