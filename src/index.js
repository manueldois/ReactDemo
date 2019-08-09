import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from 'components/Nav/Nav'
import Home from 'routes/Home/Home'
import MemeGenerator from 'routes/MemeGenerator/MemeGenerator';
import DataFlow from 'routes/DataFlow/DataFlow';
import Forms from 'routes/Forms/Forms';

const routing = (
    <Router>
        <Nav></Nav>
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/memegenerator" exact component={MemeGenerator} />
            <Route path="/dataflow" exact component={DataFlow}/>
            <Route path="/forms" exact component={Forms}/>

        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
