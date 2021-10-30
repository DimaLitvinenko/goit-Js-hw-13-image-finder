# goit-js-hw-13-image

## Кнопка 'Load more'

При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими.

Страница должна автоматически плавно проскроливаться после рендера изображений, чтобы перевести пользователя на следующие загруженные изображения. Используй метод Element.scrollIntoView().
```js
const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
```

## Pixabay API
```js
{
  "comments": 78,
  "downloads": 63296,
  "favorites": 558,
  "id": 1508613,
  "imageHeight": 2135,
  "imageSize": 1630104,
  "imageWidth": 2894,
  "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
  "likes": 575,
  "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
  "previewHeight": 110,
  "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
  "previewWidth": 150,
  "tags": "cat, animal, cat portrait",
  "type": "photo",
  "user": "cocoparisienne",
  "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
  "user_id": 127419,
  "views": 127450,
  "webformatHeight": 472,
  "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
  "webformatWidth": 640
}
```

$mobile: 480px;
$tablet: 768px;
$desktop: 1200px;

fullHDURL : max width 1920px.
largeImageURL: max  1280px.
webformatURL: 180px, 340px, 640px, max 960px 
previewURL max width 150px



```js
prettierrc.json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 120,
  "proseWrap": "never",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": true,
  "vueIndentScriptAndStyle": false,
  "singleAttributePerLine": false
}
```

```html
 <!-- В этот список добавляй элементы галереи -->
    <ul class="gallery js-gallery"></ul>

    <!--
      Модальное окно для полноразмерного изображения
      Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
    -->
    <div class="lightbox js-lightbox">
      <div class="lightbox__overlay"></div>

      <div class="lightbox__content">
        <img class="lightbox__image" src="" alt="" />
      </div>

      <button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
      ></button>
    </div>
```