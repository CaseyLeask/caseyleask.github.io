import EventEmitter from 'events';
import React from 'react';
import Router, { HistoryLocation } from 'react-router';

import routes from './routes';
import fetchData from './util/fetchData';

require('es6-promise').polyfill();

var loadingEvents = new EventEmitter();

Router.run(routes, HistoryLocation, function (Handler, state) {
  loadingEvents.emit('loadStart');

  fetchData(state.routes, state.params).then((data) => {
    loadingEvents.emit('loadEnd');
    React.render(<Handler data={data}/>, document.body);
  });
});
