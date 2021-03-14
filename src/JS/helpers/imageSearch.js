import api from '../api/apiService';
import refs from '../settings/refs';

export default {
  searchImages: '',
  page: '',

  fetchImages() {
    return api
      .fetchImages(this.query, this.page)
      .then(images => images.hits)
      .catch(err => console.log(err));
  },
  get query() {
    return this.searchImages;
  },
  set query(value) {
    this.searchImages = value;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  clear() {
    refs.imagesContainer.innerHTML = '';
  },
};
