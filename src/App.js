import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages';
import EquipoPage from './pages/equipoPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/equipo' component={EquipoPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
