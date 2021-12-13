import * as basicLightbox from "basiclightbox";
import * as basicSlider from "basicslider";
import "material-icons/iconfont/filled.scss";
import "../../../node_modules/basiclightbox/dist/basicLightbox.min.css";
let instance = null;

export default function openLightBoxHandler({ target }) {
	if (target.nodeName === "IMG") {
		instance = basicLightbox.create(
			`
        <div class="lightbox__wrapper slider" data-id="0">
          <img 
          class="lightbox__image" 
          src="${target.dataset.lightboxImg}" 
          alt="${target.alt}"
          />
          <button class="lightbox__close-button" id="lightBoxClose" type="button"> 
            <i class="material-icons lightbox__close-icon">
              close
            </i> 
          </button> 
        </div>
      `,
			{
				onShow: instance => {
					document.body.style.overflowY = "hidden";
					instance.element().querySelector("#lightBoxClose").onclick = instance.close;
				},
				onClose: () => {
					document.body.style.overflowY = "unset";
				},
				className: ".slider",
			},
		);
		instance.show(() => {
			window.addEventListener("keydown", closeLightBoxByEscHandler);
		});
		return;
	}
}

// Закрыть lightbox клавишей ESC
function closeLightBoxByEscHandler({ code }) {
	if (code === "Escape") {
		instance.close();
	}
	return;
}

basicSlider.create(
	document.querySelector('.slider[data-id="0"]'),
	Array.prototype.map.call(document.querySelectorAll('.slider[data-id="0"] > img'), slide => slide.innerHTML),
);
