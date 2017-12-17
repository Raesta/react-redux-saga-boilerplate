import apisauce from 'apisauce';
import Config from '../Ressources/Config';

const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';

const create = (baseURL = Config.urls.baseApiFlickrUrl) => {
  const api = apisauce.create({
    baseURL,
    timeout: 30000,
  });

  const getPictures = (payload) => api.get(`/services/rest/?method=flickr.photos.search&text=${payload.search}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=${payload.perPage}&page=${payload.page}`);

  return {
    getPictures,
  };
};

export default {
  create,
};
