import './styles.css';
import refs from './JS/settings/refs';
import ImageSearch from './JS/helpers/imageSearch';
import onImgClick from './JS/helpers/basicLightbox';
import imagesMarkup from './JS/helpers/imagesMarkup';
import LoadMoreBtn from './JS/components/loadMoreBtn';
import { pluginError, pluginNotice } from './JS/helpers/pluginOn';

const debounce = require('lodash.debounce');

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.inputRef.addEventListener('input', debounce(searchInputHandler, 500));
loadMoreBtn.refs.button.addEventListener('click', fetchAndRenderImages);
refs.imagesContainer.addEventListener('click', onImgClick);

function searchInputHandler() {
  ImageSearch.clear();
  ImageSearch.query = refs.inputRef.value;
  if (!ImageSearch.query) {
    loadMoreBtn.hide();
    return pluginNotice();
  }
  ImageSearch.resetPage();
  fetchAndRenderImages();
}

function fetchAndRenderImages() {
  ImageSearch.fetchImages()
    .then(images => {
      if (!images.length) {
        loadMoreBtn.hide();
        return pluginError();
      }
      imagesMarkup(images);
      loadMoreBtn.show();
      loadMoreBtn.enable();

      window.scrollTo({
        top: refs.imagesContainer.clientHeight,
        left: 0,
        behavior: 'smooth',
      });
    })
    .catch(error => console.log(error));
  loadMoreBtn.disable();
  ImageSearch.incrementPage();
}
