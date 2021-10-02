import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

import './App.css';

const App = () => (
  <div>
    <Header />
    <Switch>
      <div className="App">
        <Route path="/" component={Books} exact />
        <Route path="/categories" component={Categories} exact />
      </div>
    </Switch>
  </div>
);

export default App;
