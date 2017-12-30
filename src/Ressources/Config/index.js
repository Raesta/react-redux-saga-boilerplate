import immutablePersistenceTransform from '../../Services/ImmutablePersistenceTransform';

export default ({
  reducerVersion: '0.0.1',
  urls: {
    baseApiFlickrUrl: 'https://api.flickr.com',
  },
  persistence: {
    transforms: [immutablePersistenceTransform],
  },
});
