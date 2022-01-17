import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import MyNotes from './my-notes';
import Favorites from './favorites';
import Note from './note'
import SignUp from './sign-up'
import Layout from '@/components/Layout';
import SignIn from './sign-in';
import { PublicRoute, PrivateRoute } from '@/components/Route/';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" component={Home} exact />
          <PublicRoute path="/sign-up" component={SignUp} />
          <PublicRoute path="/sign-in" component={SignIn} />
          <PrivateRoute path="/my-notes" component={MyNotes} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <Route path="/note/:id" component={Note} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default Pages;