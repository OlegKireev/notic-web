import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(
  <WrappedApp />,
  document.getElementById('root')
);