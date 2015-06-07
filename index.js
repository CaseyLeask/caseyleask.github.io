import fs from 'fs';

import React from 'react';
import Router from 'react-router';

import routes from './src/routes';
import interrogate from './src/util/interrogate-react-router';

var indexHTML = fs.readFileSync(__dirname + '/src/index.html').toString();

var paths = interrogate(routes);

paths.forEach(function(path) {
  Router.run(routes, path, function (Root, State) {
    var path = State.path;
    var pageHTML = indexHTML.replace(/¡HTML!/, React.renderToString(<Root />));

    fs.mkdir(__dirname + '/dist' + path, function(err) {
      if (err && err.code !== 'EEXIST') {
        throw err;
      }
      fs.writeFile(__dirname + '/dist' + path + 'index.html', pageHTML);
    });
  });
});
