import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages';
import EquipoPage from './pages/equipoPage';
import EntrarPage from "./pages/EntrarPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path='/equipo' component={EquipoPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
