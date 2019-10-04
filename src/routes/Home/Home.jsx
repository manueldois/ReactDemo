import React from 'react'
import './Home.scss'
import logo from 'assets/logo.svg'

class Home extends React.Component {
    render() {
        return (
            <div className="page homePage">
                <h1>Homepage</h1>
                <div className="logo-img-container">
                    <img src={logo} id="logo" alt='logo' />
                </div>
            </div>
        )
    }
}

export default Home