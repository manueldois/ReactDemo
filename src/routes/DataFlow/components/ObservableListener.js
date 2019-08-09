import React, { Component } from 'react'
import { countingService } from 'services/counting.service'

export default class ObservableListener extends Component {
    constructor() {
        super()
        this.state = {
            count: null
        }

    }

    componentDidMount() {
        countingService.getMessage().subscribe(data => this.setState({ count: data.number }))
    }

    render() {
        return (
            <div className="ObservableListener">
                <h3>Observable Listener</h3>
                <h2>Count: {this.state.count}</h2>
            </div>
        )
    }
}
