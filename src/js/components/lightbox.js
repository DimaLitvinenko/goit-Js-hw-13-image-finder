import * as basicLightbox from 'basiclightbox'
import 'material-icons/iconfont/filled.scss';
import * as basicSlider from 'basicslider'
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css'
let instance = null;

export default function openLightBoxHandler({ target }) {
  if (target.nodeName === 'IMG') {
    instance = basicLightbox.create(`
      <div class="lightbox__wrapper" style="background-image: url('https://media.giphy.com/media/grNkIEN4dkiMXFLIE9/giphy.gif')">
        <button class="lightbox__close-button" type="button"> 
          <i class="lightbox__close-icon material-icons">
          close
          </i> 
        </button>
        <img class="lightbox__image" src="${target.dataset.lightboxImg}" alt="${target.alt}" width="800" height="600">
      </div>
    `, {
      onShow: (instance) => {
        document.body.style.overflowY = 'hidden';
        instance.element().querySelector('.lightbox__close-button').onclick = instance.close;
      },
      onClose: () => {
        document.body.style.overflowY = 'unset';
      },
      className : '.slider'
    })
    instance.show(() => {
      window.addEventListener('keydown', closeLightBoxByEscHandler); 
    })
    return;
  }
}
// Закрыть lightbox клавишей ESC
function closeLightBoxByEscHandler({ code }) {
  if (code === 'Escape') {
    instance.close();
  }
  return;
}




// const scrollGalleryHandler = ({ key }) => {   
//   let currentIndex = galleryItems.findIndex(
//     item => item.description === image.alt || item.original === image.src
//   );
//   if (key === "ArrowLeft") {                // - Пролистывание изображений галереи в открытом модальном окне стрелками "влево".
//     if (currentIndex !== 0) {
//       currentIndex -= 1;
//     } else {
//       currentIndex = 0;
//     };
//   };
//   if (key === "ArrowRight") {                // - Пролистывание изображений галереи в открытом модальном окне стрелками "вправо".
//     if (currentIndex !== galleryItems.length - 1) {
//       currentIndex += 1;
//     } else {
//       currentIndex = galleryItems.length - 1;
//     };
//   }; 
  
//   image.alt = galleryItems[currentIndex].description;
//   image.src = galleryItems[currentIndex].original;
// };

  // for each
// export function forEach (arr, callback, scope) {
//   for (var i = 0, l = arr.length; i < l; i++) {
//     callback.call(scope, arr[i], i);
//   }
// }


  // Следующий
// (function () {
//   "use strict";

//   if (!("nextElementSibling" in document.documentElement)) {
//     Object.defineProperty(Element.prototype, "nextElementSibling", {
//       get: function(){
//         var e = this.nextSibling;
//         while(e && 1 !== e.nodeType) {
//           e = e.nextSibling;
//         }
//         return e;
//       }
//     });
//   }
// })();

  //   Предыдущий
// (function () {
//   "use strict";

//   if (!("previousElementSibling" in document.documentElement)) {
//     Object.defineProperty(Element.prototype, "previousElementSibling", {
//       get: function(){
//         var e = this.previousSibling;
//         while(e && 1 !== e.nodeType) {
//           e = e.previousSibling;
//         }
//         return e;
//       }
//     });
//   }
// })();

