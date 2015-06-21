export default function fetchData(routes, params) {
  var data = {};
  return Promise.all(
    routes
      .filter(route => route.handler.fetchData)
      .map(route => {
        return route.handler
                    .fetchData(params)
                    .then(d => {data[route.name] = d;});
      })
  ).then(() => data)
  .catch((err) => console.log(err, err.stack.split("\n")));
}
