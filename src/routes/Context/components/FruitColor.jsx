import React from 'react'
import { FruitContext } from '../context'
import './FruitColor.scss'

export default class FruitColor extends React.Component {
    static contextType = FruitContext;

    render() {
        return (
            <div className="FruitColorComponent" style={{ backgroundColor: this.props.color }}>
                {this.context === 'apple' && <img src="apple.svg" />}
                {this.context === 'banana' && <img src="banana.svg" />}
            </div>
        )
    }
}