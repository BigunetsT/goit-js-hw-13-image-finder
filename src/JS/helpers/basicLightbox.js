const basicLightbox = require('basiclightbox');

const onImgClick = event => {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }
  const largeURL = event.target.getAttribute('largeImageURL');
  basicLightbox
    .create(
      `
       <img width="800" height="600" src=${largeURL}>
    	`,
    )
    .show();
};

export default onImgClick;
