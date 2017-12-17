export const pictureFromApi = picture => ({
  title: `${picture.title}`,
  url: `https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`,
});

export const listFromApi = (list) => list.map(pictureFromApi);

export const responseFromApi = object => ({
  total: parseInt(object.photos.total, 10),
  page: parseInt(object.photos.page, 10),
  pages: parseInt(object.photos.pages, 10),
  perPage: parseInt(object.photos.perpage, 10),
  list: listFromApi(object.photos.photo)
});
