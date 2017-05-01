import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Bundle from './Bundle';

import loadAbout from 'bundle-loader?lazy!./About.js';
import Home from './Home';
import Topics from './Topics';

const About = () => (
  <Bundle load={loadAbout}>
    {(C) => <C />}
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

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
