import React from 'react'
import './Nav.scss'

import { NavLink } from 'react-router-dom'
import logo from 'assets/logo.svg'

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        window.addEventListener('resize', (e) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            console.log(w)
        })
    }

    render() {
        return (
            <nav>
                <img className="logo" src={logo}></img>
                <div className="links">
                    <NavLink to="/" exact activeClassName="active" >Home</NavLink>
                    <NavLink to="/memegenerator" exact activeClassName="active" >Meme Generator</NavLink>
                    <NavLink to="/dataflow" exact activeClassName="active" >Data Flow</NavLink>
                    <NavLink to="/forms" exact activeClassName="active" >Forms</NavLink>
                </div>
            </nav>
        )
    }
}

export default Nav