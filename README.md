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

/// ================================================== ///

<h1 align="center">Webpack kit</h1>

<p align="center">
<a href="https://https://webpack.js.org/?screen_name=shields_io">
  <img alt="Webpack" src="https://img.shields.io/static/v1?labelColor=darkblue&color=blue&message=v5.53.0&label=Webpack&style=plastic&logo=webpack&url=https://webpack.js.org">
</a> 
 <a href="https://sass-lang.com//?screen_name=shields_io">
  <img alt="SASS" src="https://img.shields.io/static/v1?labelColor=darkviolet&color=violet&message=v1.42.1&label=sass&style=plastic&logo=sass&url=https://sass-lang.com">
</a> 
<a href="https://nodejs.org/en/about/?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?labelColor=purple&color=darkorchid&message=v14.17.6&label=Node.js&style=plastic&logo=nodedotjs&url=https://nodejs.org/en/about"
             alt="Node.js">
</a>
</p>

===================== ORDERS ======================

```javascript
// Функция order() отображает окно для покупки товара с наименованием "item_25new".
// Названия платёжных событий пишутся в контейнер с id="callbacks".

function order() {
    var params = {
        type: 'item',
        item: 'item_25new',
    };
    VK.callMethod('showOrderBox', params);
}

var callbacksResults = document.getElementById('callbacks');

VK.addCallback('onOrderSuccess', function (order_id) {
    callbacksResults.innerHTML += '<br />onOrderSuccess ' + order_id;
});
VK.addCallback('onOrderFail', function () {
    callbacksResults.innerHTML += '<br />onOrderFail';
});
VK.addCallback('onOrderCancel', function () {
    callbacksResults.innerHTML += '<br />onOrderCancel';
});

Обратите внимание — в тестовом режиме подписка 5 раз автоматически продлевается раз в 10 минут (для period = month) и раз в 2 минуты для других значений period. После этого подписка автоматически отменяется.

function order() {
    VK.callMethod('showSubscriptionBox', 'create', {item: 'subscription1'});
  }

  var callbacksResults = document.getElementById('callbacks');

  VK.addCallback('onSubscriptionSuccess', function(subscription_id) {
    callbacksResults.innerHTML += '<br />onSubscriptionSuccess '+subscription_id;
  });
  VK.addCallback('onSubscriptionFail', function() {
    callbacksResults.innerHTML += '<br />onSubscriptionFail';
  });
  VK.addCallback('onSubscriptionCancel', function() {
    callbacksResults.innerHTML += '<br />onSubscriptionCancel';
  });

Функция order позволяет отобразить пользователю окно для покупки товара с наименованием 'subscription_25new'. Названия произошедших платёжных событий пишутся в контейнер с id="callbacks".

```

===================== CHECKBOX ======================

```HTML
<label class="b-contain">
    <span>First checkbox</span> <input type="checkbox" />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Second checkbox</span> <input type="checkbox" checked />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <input type="checkbox" disabled /> <span>Third checkbox</span>
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Fourth checkbox</span> <input type="checkbox" checked disabled />
    <div class="b-input"></div>
</label>

<label class="b-contain">
    <span>First radio</span>
    <input type="radio" name="radio1" />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Second radio</span>
    <input type="radio" name="radio1" checked />
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <input type="radio" name="radio2" disabled />
    <span>Third radio</span>
    <div class="b-input"></div>
</label>
<label class="b-contain">
    <span>Fourth radio</span>
    <input type="radio" name="radio2" checked disabled />
    <div class="b-input"></div>
</label>
```

```CSS
.b-contain *,
.b-contain *::before,
.b-contain *::after {
    box-sizing: content-box !important;
}

.b-contain input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.b-contain span {
    line-height: 1.54;
    font-size: 1rem;
    font-family: inherit;
}

.b-contain {
    display: table;
    position: relative;
    padding-left: 1.8rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
}

.b-contain input[type='checkbox'] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 0.125rem;
}

.b-contain input[type='radio'] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 2rem;
}

.b-contain input[type='checkbox'] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.45rem;
    top: 0.18rem;
    width: 0.25rem;
    height: 0.6rem;
    border: solid rgba(255, 255, 255, 1);
    border-width: 0 2px 2px 0;
    transition: background 250ms;
    transform: rotate(45deg);
}

.b-contain input[type='radio'] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.25rem;
    top: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 1);
    transition: background 250ms;
}

.b-contain input:disabled ~ .b-input::after {
    border-color: rgba(135, 149, 161, 1);
}

.b-contain input:checked ~ .b-input::after {
    display: block;
}

.b-contain:hover input ~ .b-input,
.b-contain input:focus ~ .b-input {
    background: rgb(231, 238, 243);
}

.b-contain input:focus ~ .b-input {
    box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
}

.b-contain input:checked ~ .b-input {
    background: rgba(0, 130, 243, 1);
    border-color: rgba(0, 130, 243, 1);
}

.b-contain input[type='checkbox']:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
}

.b-contain input[type='radio']:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
}

.b-contain input[type='radio']:disabled ~ .b-input::after {
    background: rgba(135, 149, 161, 1);
}

.b-contain input:checked:focus ~ .b-input,
.b-contain:hover input:not([disabled]):checked ~ .b-input {
    background: rgba(13, 143, 255, 1);
    border-color: rgba(13, 143, 255, 1);
}

.b-contain .b-input::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    margin-left: -0.85rem;
    margin-top: -0.85rem;
    background: rgba(0, 130, 243, 1);
    border-radius: 2rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
}

@keyframes b-ripple {
    0% {
        transform: scale(0);
    }

    20% {
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

@keyframes b-ripple-duplicate {
    0% {
        transform: scale(0);
    }

    30% {
        transform: scale(1);
    }

    60% {
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.b-contain input + .b-input::before {
    animation: b-ripple 250ms ease-out;
}

.b-contain input:checked + .b-input::before {
    animation-name: b-ripple-duplicate;
}

.b-contain .b-input::before {
    visibility: hidden;
}

.b-contain input:focus + .b-input::before {
    visibility: visible;
}

.b-contain:first-child .b-input::before {
    visibility: hidden;
}
```

/// ================================================ ///
<h1 align="center">HomeWork-11-ColorSwitcher-Promisification-CountdownTimer</h1>

<h2 align="center">Parcel boilerplate</h2>

## Задание 1 - Переключатель цветов

Есть массив цветов в hex-формате и кнопки `Star` и `Stop`.

```html
<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
```

```js
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
```

Напиши скрипт, который после нажатия кнопки `Start`, раз в секунду меняет цвет
фона `body` на случайное значение из массива используя инлайн-стиль. При нажатии
на кнопку `Stop`, изменение цвета фона должно останавливаться.

> ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так,
> чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй
функцию `randomIntegerFromInterval`.

```js
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
```

## Задание 2 - Промисификация

### 1

Напиши функцию `delay(ms)`, которая возвращает промис, переходящий в состояние
`"resolved"` через `ms` миллисекунд. Значением исполнившегося промиса должно
быть то кол-во миллисекунд которое передали во время вызова функции `delay`.

```js
const delay = ms => {
    // Твой код
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
```

### 2

Перепиши функцию `toggleUserState()` так, чтобы она не использовала
callback-функцию callback, а принимала всего два параметра `allUsers` и
`userName` и возвращала промис.

```js
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
    );

    callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
```

### 3

Перепиши функцию `makeTransaction()` так, чтобы она не использовала
callback-функции `onSuccess` и `onError`, а принимала всего один параметр
`transaction` и возвращала промис.

```js
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction, onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
            onSuccess(transaction.id, delay);
        } else {
            onError(transaction.id);
        }
    }, delay);
};

const logSuccess = (id, time) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
```

====================

```html
<form class="form">
    <label>
        First delay (ms)
        <input type="number" name="delay" required />
    </label>
    <label>
        Delay step (ms)
        <input type="number" name="step" required />
    </label>
    <label>
        Amount
        <input type="number" name="amount" required />
    </label>
    <button type="submit">Create promises</button>
</form>
```

Напиши скрипт, который при сабмите формы вызывает функцию
`createPromise(position, delay)` столько раз, сколько ввели в поле `amount`. При
каждом вызове передай ей номер создаваемого промиса (`position`) и задержку
учитывая введенную пользователем первую задержку (`delay`) и шаг (`step`).

```js
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        // Fulfill
    } else {
        // Reject
    }
}
```

Дополни код функции `createPromise` так, чтобы она возвращала **один промис**,
который выполянется или отклоняется через `delay` времени. Значением промиса
должен быть объект, в котором будут свойства `position` и `delay` со значениями
одноименных параметров. Используй начальный код функции для выбора того, что
нужно сделать с промисом - выполнить или отклонить.

```js
createPromise(2, 1500)
    .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
```

### Библиотека уведомлений

> ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
> дополнительной практикой.

Для отображения уведомлений пользователю вместо `console.log()` используй
библиотеку [notiflix](https://github.com/notiflix/Notiflix#readme).

## Задание 3 - Таймер обратного отсчета

Создай плагин настраиваемого таймера, который ведет обратный отсчет до
предварительно определенной даты. Такой плагин может использоваться в блогах и
интернет-магазинах, страницах регистрации событий, во время технического
обслуживания и т. д.

![preview](preview.gif)

Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
минуты и секунды в формате `XX:XX:XX:XX`. Количество дней может состоять из
более чем двух цифр.

```html
<div class="timer" id="timer-1">
    <div class="field">
        <span class="value" data-value="days">11</span>
        <span class="label">Days</span>
    </div>

    <div class="field">
        <span class="value" data-value="hours">11</span>
        <span class="label">Hours</span>
    </div>

    <div class="field">
        <span class="value" data-value="mins">11</span>
        <span class="label">Minutes</span>
    </div>

    <div class="field">
        <span class="value" data-value="secs">11</span>
        <span class="label">Seconds</span>
    </div>
</div>
```

Плагин это класс `CountdownTimer`, экземпляр которого создает новый таймер с
настройками.

```js
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
});
```

Для подсчета значений используй следующие готовые формулы, где `time` - разница
между `targetDate` и текущей датой.

```js
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);
```

=======

### Отсчет времени

Для подсчета значений используй готовую функцию `convertMs`, где `ms` - разница
между конечной и текущей датой в миллисекундах.

```js
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```

### Форматирование времени

Функция `convertMs()` возвращает объект с рассчитанным оставшимся временем до
конечной даты. Обрати внимание, что она не форматирует результат. То есть, если
осталось 4 минуты или любой другой составляющей времени, то функция вернет `4`,
а не `04`. В интерфейсе таймера необходимо добавлять `0` если в числе меньше
двух символов. Напиши функцию `addLeadingZero(value)`, которая использует метод
метод `padStart()` и перед отрисовкой интефрейса форматируй значение.

### Библиотека уведомлений

> ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
> дополнительной практикой.

Для отображения уведомлений пользователю вместо `window.alert()` используй
библиотеку [notiflix](https://github.com/notiflix/Notiflix#readme).

## Разработка

Запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу
[http://localhost:1234](http://localhost:1234).

## Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на
GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`.
Например, после прямого пуша или принятого пул-реквеста. Для этого необходимо в
файле `package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

На всякий случай стоит зайти в настройки репозитория `Settings` > `Pages` и
убедиться что продакшен версии файлов раздаются из папки `/root` ветки
`gh-pages`.

Через какое-то время живую страницу можно будет посмотреть по адресу указанному
в отредактированном свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Файлы и папки

-   Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться
    в `src/sass/main.scss`
-   Изображения добавляйте в папку `src/images`, заранее оптимизировав их.
    Сборщик просто копирует используемые изображения чтобы не нагружать систему
    оптимизацией картинок, так как на слабых компьютерах это может занять много
    времени.



===================================================================

## Developing

### • [Настройка Webpack 5 с нуля](https://habr.com/ru/post/524260/)

### • [How to use Webpack 5](https://www.taniarascia.com/how-to-use-webpack/)

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```

Переименовать папку сборки именем вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

### Libs:

    ▴  https://github.com/mattboldt/typed.js
    ▴  https://atomiks.github.io/tippyjs/
    ▴  https://flatpickr.js.org/
    ▴  https://sciactive.com/pnotify/
    ▴  ttps://pawelgrzybek.github.io/siema/
    ▴  https://basiclightbox.electerious.com/

### [Шпаргалка Bach](https://tproger.ru/translations/bash-cheatsheet/)

### [Шпаргалка Bach 2](https://habr.com/ru/company/ruvds/blog/445270/)

### • Открыть:

        ▪ (Ctrl + ~) (Ctrl + `)
        ▪ view > teminal
        ▪ через палитру (Ctrl + Shift + p)

### • Выйти из REPL:

        ▪ (Ctrl + c)

### • Основные полезные команды:

        ▪ путь (pwd)
        ▪ лист (ls)
        ▪ навигация (cd):
            ▴ (cd ~) - перемещение в домашний каталог;
            ▴ (cd -) - в предыдущий каталог;
            ▴ (cd ..) - на один уровень выше;
            ▴ (cd Directory1/Directory2) - в каталог Directory2 по указанному пути;
        ▪ очистка (clear) или (Ctrl + l)
        ▪ создание файлов (touch)
        ▪ создание папок (mkdir)
        ▪ переименование/перемещение (mv) (mv file src/file)
        ▪ удаление (rm):
            ▴ (rm -rf src) - удаление со всем комплектующим
        ▪ информация о команде (man) (man mkdir)

## + [Node.js и npm:](https://nodejs.org/en/about/)

### • [npmjs.com](https://www.npmjs.com/) - сайт с документацией о пакетах

### • [Babel](https://babeljs.io/) - компилятор JavaScript

## + [Сборщик Webpack](https://webpack.js.org/):

## + [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html):






