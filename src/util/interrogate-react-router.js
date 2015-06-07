import { join } from 'path';

export default function interrogate(routes, parentPath) {
  let result = [];
  routes = Array.isArray(routes) ? routes: [routes];

  routes.forEach((route) => {
    const props = route._store.props;
    let path = props.path;

    if (path) {
      path = parentPath ?
        join(parentPath, path) :
        path;

      result.push(path);
    }
    if (props.children) {
      result = result.concat(interrogate(props.children, path));
    }
  });
  return result;
};

