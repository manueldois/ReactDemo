import React, { Component } from 'react'
import Counter from 'components/Counter/Counter';
import { countingService } from 'services/counting.service';

export default class ObservableCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: null
        }
    }

    componentDidMount() {
        countingService.getMessage().subscribe(data => {
            this.setState({ count: data.number })
        }
        )
    }

    render() {
        return (
            <div className="ObservableCounter">
                <h3>Observable Counter</h3>
                <Counter
                    count={this.state.count}
                    handleInc={() => countingService.sendMessage('inc')}
                    handleDec={() => countingService.sendMessage('dec')}
                />
            </div>
        )
    }
}
