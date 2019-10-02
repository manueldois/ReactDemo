import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from 'components/Nav/Nav'
const HomePage = lazy(() => import('routes/Home/Home.jsx'))
const MemeGeneratorPage = lazy(() => import('routes/MemeGenerator/MemeGenerator.jsx'));
const DataFlowPage = lazy(() => import('routes/DataFlow/DataFlow.jsx'));
const FormsPage = lazy(() => import('routes/Forms/Forms.jsx'));
const ContextPage = lazy(() => import('routes/Context/Context.jsx'));
const ForwardRefPage = lazy(() => import('routes/ForwardRef/ForwardRef.jsx'));
const AnimationsPage = lazy(() => import('routes/Animations/Animations.jsx'));



const basePath = window.location.host === 'manueldois.github.io' ? '/ReactDemo' : ''

console.log("basePath: " + basePath)
const routing = (
    <Router>
        <Nav></Nav>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${basePath}/`} exact component={HomePage} />
                <Route path={`${basePath}/memegenerator`} exact component={MemeGeneratorPage} />
                <Route path={`${basePath}/dataflow`} exact component={DataFlowPage} />
                <Route path={`${basePath}/forms`} exact component={FormsPage} />
                <Route path={`${basePath}/context`} exact component={ContextPage} />
                <Route path={`${basePath}/forwardref`} exact component={ForwardRefPage} />
                <Route path={`${basePath}/animations`} exact component={AnimationsPage} />
            </Switch>
        </Suspense>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
