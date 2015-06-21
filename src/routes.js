import React from 'react';
import { Route, DefaultRoute, RouteHandler } from 'react-router';

import Home from './components/Home';
import Index from './components/Index';
import Contact from './components/Contact';

export default (
  <Route name="contacts" path="/" handler={Home}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name="contact" path="contact/:id" handler={Contact}/>
  </Route>
);
