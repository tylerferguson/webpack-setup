import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import loadHome from 'bundle-loader?lazy&name=[name]!./Home';
import loadAbout from 'bundle-loader?lazy&name=[name]!./About';
import loadTopics from 'bundle-loader?lazy&name=[name]!./Topics';

import Bundle from './Bundle';

const createBundle = (load) => (props) => (
  <Bundle load={load}>
    {(Component) => <Component {...props} />}
  </Bundle>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={createBundle(loadHome)} />
      <Route path="/about" component={createBundle(loadAbout)} />
      <Route path="/topics" component={createBundle(loadTopics)} />
    </div>
  </Router>
);

export default BasicExample;
