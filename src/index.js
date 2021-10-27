import './main.scss'
import cardItem from './templates/cardItem.hbs'
import refs from './js/references/refs'
import setLightbox from './js/components/lightbox'
import { onError, onFetchError } from './js/components/notifications'
import ApiImages from './js/api/apiService'

const apiImages = new ApiImages();
const { searchForm, gallery, observerItem, loader, scrollElem } = refs;
const observer = new IntersectionObserver(onObserveHandler, options);

const options = {
  rootMargin: '100px',
  threshold: 0.5,
};

searchForm.addEventListener('submit', onSearchHandler);
gallery.addEventListener('click', setLightbox);

function onSearchHandler(event) {
  event.preventDefault();
  clearGallery();
  loader.classList.remove('hide-loader');

  const inputValue = event.currentTarget.elements.query.value;
  const str = new RegExp('[a-zA-Z]');
  if (!str.test(inputValue) || inputValue === '') {
    toHideLoader();
    return onError();
  }

  apiImages.query = inputValue;
  apiImages.resetPage();
  apiImages.fetchImages().then(renderImages)
  .catch(onFetchError);
}

function renderImages(images) {
  if (images.length === 0) {
    toHideLoader();
    return onError();
  }

  const markup = cardItem(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  observer.observe(observerItem);
}

function clearGallery() {
  gallery.innerHTML = '';
  observer.unobserve(observerItem);
}

function renderMoreImages() {
  apiImages.fetchImages().then(renderImages).then(toHideLoader)
  .catch(onFetchError);
}

function onObserveHandler(entries) {  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      renderMoreImages();
    }
  });
};


function toHideLoader() {
  loader.classList.add('hide-loader');
}


// прокрутка

window.addEventListener('scroll', function () {
  if (pageYOffset > 100) {
    scrollElem.style.opacity = '1';
  } else {
    scrollElem.style.opacity = '0';
  }
});

scrollElem.addEventListener('click', upBtnHandler);

function upBtnHandler() {
  window.scrollTo(0, 0);
}


///// RINA
// import './styles.css';
// import cardTemplate from './templates/card-item.hbs';
// import ImagesApiService from './js/components/apiService';
// import { onError, onFetchError } from './js/components/notifications';
// import getRefs from './js/components/getRefs';
// const refs = getRefs();
// const imagesApiService = new ImagesApiService();
// const observer = new IntersectionObserver(intersectionHandler);
// import setLightbox from './js/components/lightbox';

// refs.searchForm.addEventListener('submit', onSearch);
// refs.gallery.addEventListener('click', setLightbox);

// function onSearch(event) {
//   event.preventDefault();

//   clearGallery();
//   refs.loader.classList.remove('hide-loader');

//   const inputValue = event.currentTarget.elements.query.value;

//   const str = new RegExp('[a-zA-Z]');

//   if (!str.test(inputValue) || inputValue === '') {
//     hideLoader();
//     return onError();
//   }

//   imagesApiService.query = inputValue;
//   imagesApiService.resetPage();
//   imagesApiService.fetchImages().then(renderImgs).catch(onFetchError);
// }

// function renderImgs(images) {
//   if (images.length === 0) {
//     hideLoader();
//     return onError();
//   }

//   const markup = cardTemplate(images);
//   refs.gallery.insertAdjacentHTML('beforeend', markup);
//   observer.observe(refs.observerItem);
// }

// function clearGallery() {
//   refs.gallery.innerHTML = '';

//   observer.unobserve(refs.observerItem);
// }

// function renderMore() {
//   imagesApiService
//     .fetchImages()
//     .then(renderImgs)
//     .then(hideLoader)
//     .catch(onFetchError);
// }

// function intersectionHandler(entries) {
//   const { isIntersecting } = entries[0];
//   if (isIntersecting) {
//     renderMore();
//   }
// }

// function hideLoader() {
//   refs.loader.classList.add('hide-loader');
// }

// // прокрутка
// refs.scrollElem.addEventListener('click', goUp);

// window.addEventListener('scroll', function () {
//   if (pageYOffset > 100) {
//     refs.scrollElem.style.opacity = '1';
//   } else {
//     refs.scrollElem.style.opacity = '0';
//   }
// });

// function goUp() {
//   window.scrollTo(0, 0);
// }