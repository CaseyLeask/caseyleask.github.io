import fs from 'fs';

import React from 'react';
import Router from 'react-router';

import routes from './src/routes';
import fetchData from './src/util/fetchData';
import interrogate from './src/util/interrogate-react-router';

var indexHTML = fs.readFileSync(__dirname + '/src/index.html').toString();

var paths = interrogate(routes);

console.log(`paths: ${paths}`);

paths.forEach(function(path) {
  Router.run(routes, path, function (Handler, state) {
    fetchData(state.routes, state.params).then((data) => {
      var reactHandler = React.renderToString(<Handler data={data}/>);
      var pageHTML = indexHTML.replace(/¡HTML!/, reactHandler);
      var folderPath = __dirname + '/dist' + path;
      var filePath = folderPath + 'index.html';

      fs.mkdir(folderPath, function(err) {
        if (err && err.code !== 'EEXIST') {
          throw err;
        }
        console.log(`Writing file to ${filePath}`);
        fs.writeFile(filePath, pageHTML);
      });
    });
  });
});
