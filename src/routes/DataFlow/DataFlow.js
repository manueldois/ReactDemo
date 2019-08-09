import React, { Component } from 'react'
import './DataFlow.scss'

// For service with observable
import ObservableCounter from './components/ObservableCounter';
import ObservableListener from './components/ObservableListener';

// For redux
import ReduxCounter from './components/ReduxCounter';
import ReduxListener from './components/ReduxListener';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { counterReducer } from 'reducers/counter.reducer'
const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class DataFlow extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="page DataFlowPage">
                    <h1>Data Flow</h1>
                    <section className="observables">
                        <h2>Using a service with observables</h2>
                        <ObservableCounter></ObservableCounter>
                        <ObservableListener></ObservableListener>
                    </section>

                    <section className="redux">
                        <h2>Using redux</h2>
                        <ReduxCounter></ReduxCounter>
                        <ReduxListener></ReduxListener>
                    </section>
                </div>
            </Provider>
        )
    }
}
