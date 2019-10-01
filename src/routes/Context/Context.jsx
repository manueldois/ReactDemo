import React from 'react'
import './Context.scss'
import FruitColorsList from './components/FruitColorsList.jsx'
import { FruitContext } from './context'
import fruitData from './fruits.json'

export default class ContextPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fruit: Object.keys(fruitData)[0]
        }
    }

    handleChange = (e) => {
        const { type, name, value, checked } = e.target
        if (type === 'select-one') {
            if (name === 'fruit') this.setState({ fruit: value })
        }
    }

    render() {
        const fruitOptions = Object.keys(fruitData).map(fruitName => {
            return (
                <option value={fruitName}>{fruitName}</option>
            )
        })

        return (
            <div className="page ContextPage">
                <h1>ContextPage</h1>
                <section>
                    <form>
                        <select name="fruit" value={this.state.fruit} onChange={this.handleChange}>
                            {fruitOptions}
                        </select>
                    </form>

                    <FruitContext.Provider value={this.state.fruit}>
                        <FruitColorsList></FruitColorsList>
                    </FruitContext.Provider>
                </section>
            </div>
        )
    }
}