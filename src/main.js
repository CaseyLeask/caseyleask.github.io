import React from 'react';
import Router, { Route } from 'react-router';

import Content from "./components/content";
import routes from "./routes";

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

