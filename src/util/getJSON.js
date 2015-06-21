import axios from 'axios';

function getJSON(url) {
  if (getJSON._cache[url]) {
    return Promise.resolve(getJSON._cache[url]);
  }

  return axios.get(url)
    .then((response) => {
      if (response.status === 404) {
        throw new Error('not found');
      }

      getJSON._cache[url] = response.data;
      return response.data;
    });
}

getJSON._cache = {};

export default getJSON;
