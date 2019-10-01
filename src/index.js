import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from 'components/Nav/Nav'
const Home = lazy(() => import('routes/Home/Home.jsx'))
const MemeGenerator = lazy(() => import('routes/MemeGenerator/MemeGenerator.jsx'));
const DataFlow = lazy(() => import('routes/DataFlow/DataFlow.jsx'));
const Forms = lazy(() => import('routes/Forms/Forms.jsx'));
const Context = lazy(() => import('routes/Context/Context.jsx'));

const basePath = window.location.host === 'manueldois.github.io' ? '/ReactDemo' : ''

console.log(basePath, `"${basePath}/"`)
const routing = (
    <Router>
        <Nav></Nav>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${basePath}/`} exact component={Home} />
                <Route path={`${basePath}/memegenerator`} exact component={MemeGenerator} />
                <Route path={`${basePath}/dataflow`} exact component={DataFlow} />
                <Route path={`${basePath}/forms`} exact component={Forms} />
                <Route path={`${basePath}/context`} exact component={Context} />
            </Switch>
        </Suspense>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
