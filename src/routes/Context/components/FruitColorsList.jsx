import React from 'react'
import { FruitContext } from '../context'
import FruitColor from './FruitColor'
import './FruitColorsList.scss'
import fruitsData from '../fruits.json'

export default class FruitColorsList extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = FruitContext;

    render() {
        const fruit = fruitsData[this.context]
        if(!fruit) return (<div></div>)

        const fruitColors = fruit.colors.map((color, i) => {
            return (
                <div key={i}>
                    {/* No need to pass the fruit name, FruitColor component will get it in context */}
                    <FruitColor color={color}></FruitColor> 
                    <span>{color.toUpperCase()}</span>
                </div>
            )
        })

        return (
            <div className="FruitColorsComponent">
                <h2>Fruit: {this.context}</h2>
                <div className="colors">
                    {fruitColors}
                </div>
            </div>
        )
    }
}