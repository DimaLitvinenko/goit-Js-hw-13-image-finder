import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basiclightbox.min.css';

export default function setLightbox({ target }) {
  const bigImgUrl = target.dataset.lightboxImg;
  const instance = basicLightbox
    .create(`<div class="lightbox-wrapper" style="background-image: url('https://i.imgur.com/NI2NcSe.gif')"><img src="${bigImgUrl}" max-width="1280" max-height="800"></div>`);

  instance.show();
}