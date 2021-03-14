import imagesTpl from '/templates/gallery.hbs';
import refs from '../settings/refs';

function imagesMarkup(images) {
  refs.imagesContainer.insertAdjacentHTML('beforeend', imagesTpl(images));
}

export default imagesMarkup;
