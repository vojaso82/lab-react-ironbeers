import { Link, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import BeerList from './components/BeerList';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/beers" render={(props) => <BeerList {...props} />} />
        <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/beers/:beerId" render={(props) => <SingleBeer {...props} />} />
      </Switch>

    </div>
  );
}

export default App;
