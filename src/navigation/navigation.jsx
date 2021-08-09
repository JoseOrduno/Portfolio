import React from 'react';
import { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import About from '../components/about';
import History from '../components/history';

export default class Navigation extends Component { 
    render() {
        return(
            <Router>
                <Switch>
                    <Route component={History} path="/history"/>
                    <Route component={About} path="/about"/>

                </Switch>
            </Router>
        )
    }
}

