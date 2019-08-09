import React, { Component } from 'react'
import { connect } from 'react-redux';

class ReduxListener extends Component {

    render() {
        return (
            <div className="ReduxListener">
                <h3>Redux Listener</h3>
                <h2>Count: {this.props.count}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state
})

export default connect(mapStateToProps)(ReduxListener)