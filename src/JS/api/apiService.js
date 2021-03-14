import settings from '../settings/index';

const api = {
  async fetchImages(searchImages, page) {
    try {
      const rawResult = await fetch(
        `${settings.BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchImages}&page=${page}&per_page=12&key=${settings.KEY}`,
      );
      const result = await rawResult.json();
      return result;
    } catch (err) {
      throw err;
    }
  },
};

export default api;
