import React, { Component } from 'react'
import Counter from 'components/Counter/Counter'
import { connect } from 'react-redux'

class ReduxCounter extends Component {
    render() {
        return (
            <div className="ReduxCounter">
                <h3>Redux Counter</h3>
                <Counter
                    count={this.props.count}
                    handleInc={this.props.handleInc}
                    handleDec={this.props.handleDec}
                >
                </Counter>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state
})

const mapDispatchToProps = (dispatch) => ({
    handleInc: () => dispatch({ type: 'INCREMENT' }),
    handleDec: () => dispatch({ type: 'DECREMENT' })

})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)
