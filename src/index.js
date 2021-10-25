import './styles.css';
import cardItem from './templates/cardItem.hbs'
import { onError, onFetchError } from './components/notifications';
import ApiImages from './api/apiService'
import refs from './settings/refs';
const apiImages = new ApiImages();
import setLightbox from './components/lightbox';

refs.searchForm.addEventListener('submit', onSearch);
refs.gallery.addEventListener('click', setLightbox);

function onSearch(event) {
  event.preventDefault();

  clearGallery();
  refs.loader.classList.remove('hide-loader');

  const inputValue = event.currentTarget.elements.query.value;

  const str = new RegExp('[a-zA-Z]');

  if (!str.test(inputValue) || inputValue === '') {
    hideLoader();
    return onError();
  }

  apiImages.query = inputValue;

  apiImages.resetPage();

  apiImages.fetchImages().then(renderImgs).catch(onFetchError);
}

function renderImgs(images) {
  if (images.length === 0) {
    hideLoader();
    return onError();
  }

  const markup = cardItem(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  observer.observe(refs.observerItem);
}

function clearGallery() {
  refs.gallery.innerHTML = '';

  observer.unobserve(refs.observerItem);
}

function renderMore() {
  apiImages
    .fetchImages()
    .then(renderImgs)
    .then(hideLoader)
    .catch(onFetchError);
}

const observerCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      renderMore();
    }
  });
};

const options = {
  rootMargin: '100px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(observerCallback, options);
function hideLoader() {
  refs.loader.classList.add('hide-loader');
}
//-----------------------------------------------
refs.scrollElem.addEventListener('click', goUp);

window.addEventListener('scroll', function () {
  if (pageYOffset > 100) {
    refs.scrollElem.style.opacity = '1';
  } else {
    refs.scrollElem.style.opacity = '0';
  }
});

function goUp() {
  window.scrollTo(0, 0);
}

