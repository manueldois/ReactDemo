import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
    render() {
        return (
            <div className='Counter'>
                <button name="inc" onClick={this.props.handleInc}>+</button>
                <h2>{this.props.count}</h2>
                <button name="dec" onClick={this.props.handleDec}>-</button>
            </div>
        )
    }
}

export default (Counter)