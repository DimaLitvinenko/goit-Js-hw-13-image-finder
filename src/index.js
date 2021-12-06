import './main.scss'
// import 'material-icons/iconfont/two-tone.scss';
import cardItemTemplate from './templates/imagesGallery.hbs'
import openLightBoxHandler from './js/components/lightBox'
import { onError, onFetchError } from './js/components/notifications'
import PixabayApiService from './js/api/apiService'
const apiService = new PixabayApiService();

import refs from './js/references/refs'
const { searchForm, gallery, observerItem, scrollElem, loader } = refs;
const observer = new IntersectionObserver(onObserveHandler, options);
const options = {
  rootMargin: '100px',
  threshold: 0.5,
};

searchForm.addEventListener('submit', searchPhotoHandler);
gallery.addEventListener('click', openLightBoxHandler);

// searchToggle(gallery, searchPhotoHandler);

// function searchToggle(obj, evt) {
//   const container = $(obj).closest('.search-wrapper');
//     if (!container.hasClass('active')) {
//       container.addClass('active');
//       evt.preventDefault();
//     } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
//       container.removeClass('active');
//       // clear input
//       container.find('.search-input').val('');
//     }
// }

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
  const markup = cardItemTemplate(images);
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
}

//        =======================================
// let grid = document.querySelector('.grid');

// let msnry = new Masonry( grid, {
//   itemSelector: 'none', // select none at first
//   columnWidth: '.grid__col-sizer',
//   gutter: '.grid__gutter-sizer',
//   percentPosition: true,
//   stagger: 30,
//   // nicer reveal transition
//   visibleStyle: { transform: 'translateY(0)', opacity: 1 },
//   hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
// });


// // initial items reveal
// imagesLoaded( grid, function() {
//   grid.classList.remove('are-images-unloaded');
//   msnry.options.itemSelector = '.grid__item';
//   let items = grid.querySelectorAll('.grid__item');
//   msnry.appended( items );
// });

// //-------------------------------------//
// // hack CodePen to load pens as pages

// var nextPenSlugs = [
//   '202252c2f5f192688dada252913ccf13',
//   'a308f05af22690139e9a2bc655bfe3ee',
//   '6c9ff23039157ee37b3ab982245eef28',
// ];

// function getPenPath() {
//   let slug = nextPenSlugs[ this.loadCount ];
//   if ( slug ) {
//     return `/desandro/debug/${slug}`;
//   }
// }

// //-------------------------------------//
// // init Infinte Scroll

// let infScroll = new InfiniteScroll( grid, {
//   path: getPenPath,
//   append: '.grid__item',
//   outlayer: msnry,
//   status: '.page-load-status',
// });
//        =======================================


// setIntersectionObserver(addNewImages) {
//   setTimeout(() => {
//     const callback = (entries, self) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           addNewImages()
//           self.unobserve(lastItem)
//         }
//       });
//     };

//     const options = {
//       rootMargin: '200px'
//     };

//     const observer = new IntersectionObserver(callback, options);
//     const items = document.querySelectorAll('.item');
//     const lastItem = items[items.length - 1]
//     observer.observe(lastItem)
//   }, 500)
// }