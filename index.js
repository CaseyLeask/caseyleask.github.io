import fs from 'fs';

import React from 'react';
import Router from 'react-router';

import routes from './src/routes';

var indexHTML = fs.readFileSync(__dirname + '/src/index.html').toString();

Router.run(routes, function (Root) {
  // whenever the url changes, this callback is called again
  var pageHTML = indexHTML.replace(/¡HTML!/, React.renderToString(<Root />));
  fs.writeFileSync(__dirname + '/dist/index.html', pageHTML);
});
