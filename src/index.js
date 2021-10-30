import './main.scss'
import cardItem from './templates/cardItem.hbs'
import refs from './js/references/refs'
import openLightBox from './js/components/lightBox'
import { onError, onFetchError } from './js/components/notifications'
import PixabayApiService from './js/api/apiService'

const apiService = new PixabayApiService();
const { searchForm, gallery, observerItem, scrollElem, loader } = refs;
const observer = new IntersectionObserver(onObserveHandler, options);

const options = {
  rootMargin: '100px',
  threshold: 0.5,
};

searchForm.addEventListener('submit', searchPhotoHandler);
gallery.addEventListener('click', openLightBox);

function searchPhotoHandler(event) {
  event.preventDefault();
  clearCardGallery();

  showLoader();

  const inputValue = event.currentTarget.elements.query.value;
  console.log(inputValue);
  const str = new RegExp('[a-zA-Z]');
  if (!str.test(inputValue) || inputValue === '') {
    hideLoader();
    return onError(); 
  }

  apiService.query = inputValue;
  apiService.resetPage();

  apiService
  .fetchPhotos()
  .then(renderImages)
  .catch(onFetchError)
}

function renderImages(images) {
  console.log(images.length === 0);

  if (images.length === 0) {
    hideLoader();
    return onError();
  }

  const markup = cardItem(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  observer.observe(observerItem);
}

function clearCardGallery() {
  gallery.innerHTML = '';
  observer.unobserve(observerItem);
}

function renderMoreImages() {
  apiService
  .fetchPhotos()
  .then(renderImages)
  .then(hideLoader)
  .catch(onFetchError)
}

function onObserveHandler(entries) {  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      renderMoreImages();
    }
  });
};


function hideLoader() {
  loader.classList.add('hide-loader');
}

function showLoader() {
  loader.classList.remove('hide-loader');
}

// Безконечная прокрутка прокрутка
window.addEventListener('scroll', function () {
  if (pageYOffset > 100) {
    scrollElem.style.opacity = '1';
  } else {
    scrollElem.style.opacity = '0';
  }
});

// Кнопка возврат вверх сраницы
scrollElem.addEventListener('click', upBtnHandler);

function upBtnHandler() {
  window.scrollTo(0, 0);
  scrollElem.removeEventListener('click');
}

