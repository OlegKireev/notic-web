import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import MyNotes from './my-notes';
import Favorites from './favorites';
import Layout from '../components/Layout';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" component={Home} exact />
          <Route path="/my-notes" component={MyNotes} />
          <Route path="/favorites" component={Favorites} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default Pages;