import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import MyNotes from './my-notes';
import Favorites from './favorites';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/my-notes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  )
}

export default Pages;