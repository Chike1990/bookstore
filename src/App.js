import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Books} exact />
        <Route path="/categories"component={Categories} exact />
      </Switch>
    </div>
  );
};

export default App;