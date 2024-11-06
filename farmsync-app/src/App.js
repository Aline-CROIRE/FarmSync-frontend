import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Reports from './pages/Reports';
import Alerts from './pages/Alerts';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/reports" component={Reports} />
                <Route path="/alerts" component={Alerts} />
            </Switch>
        </Router>
    );
}

export default App;

