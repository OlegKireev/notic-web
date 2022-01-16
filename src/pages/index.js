import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import MyNotes from './my-notes';
import Favorites from './favorites';
import Note from './note'
import SignUp from './sign-up'
import Layout from '../components/Layout';
import SignIn from './sign-in';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" component={Home} exact />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/my-notes" component={MyNotes} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/note/:id" component={Note} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default Pages;