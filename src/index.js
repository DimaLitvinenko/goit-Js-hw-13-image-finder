import "./main.scss";
import cardItemTemplate from "./templates/imagesGallery.hbs";
import openLightBoxHandler from "./js/components/lightBox";
import { onError, onFetchError } from "./js/components/notifications";
import PixabayApiService from "./js/api/apiService";
import refs from "./js/references/refs";
const { searchForm, gallery, observerItem, scrollElem, loader } = refs;

const apiService = new PixabayApiService();
const observer = new IntersectionObserver(intersectionObserveHandler, options);

const options = {
	rootMargin: "200px",
};

searchForm.addEventListener("submit", searchPhotoHandler);
gallery.addEventListener("click", openLightBoxHandler);

function searchPhotoHandler(event) {
	event.preventDefault();
	clearCardGallery();
	showLoader();

	const inputValue = event.currentTarget.elements.query.value;
	console.log(inputValue);

	const str = new RegExp("[a-zA-Z]");
	if (!str.test(inputValue) || inputValue === "") {
		hideLoader();
		return onError();
	}

	apiService.query = inputValue;
	apiService.resetPage();
	apiService.fetchPhotos().then(renderImages).catch(onFetchError);
}

function renderImages(images) {
	console.log(images.length === 0);
	if (images.length === 0) {
		hideLoader();
		return onError();
	}
	const markup = cardItemTemplate(images);
	gallery.insertAdjacentHTML("beforeend", markup);
	observer.observe(observerItem);
}

function clearCardGallery() {
	gallery.innerHTML = "";
	observer.unobserve(observerItem);
}

function renderMoreImages() {
	apiService.fetchPhotos().then(renderImages).then(hideLoader).catch(onFetchError);
}

function intersectionObserveHandler(entries) {
	setTimeout(() => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				renderMoreImages();
			}
		});
	}, 500);
}

function hideLoader() {
	loader.classList.add("hide-loader");
}
function showLoader() {
	loader.classList.remove("hide-loader");
}
// Безконечная прокрутка прокрутка
window.addEventListener("scroll", function () {
	if (pageYOffset > 100) {
		scrollElem.style.opacity = "1";
	} else {
		scrollElem.style.opacity = "0";
	}
});
// Кнопка возврат вверх сраницы
scrollElem.addEventListener("click", upBtnHandler);

function upBtnHandler() {
	window.scrollTo(0, 0);
}

// setIntersectionObserver(addNewImages) {
//   setTimeout(() => {
//     const callback = (entries, self) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           addNewImages();
//           self.unobserve(lastItem)
//         }
//       });
//     };

//     const options = {
//       rootMargin: '200px'
//     };

//     const observer = new IntersectionObserver(callback, options);
//     const items = document.querySelectorAll('.gallery-item');
//     const lastItem = items[items.length - 1]
//     observer.observe(lastItem)
//   }, 500)
// }
