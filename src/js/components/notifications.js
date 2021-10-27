import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/Angeler.css'
import  '@pnotify/mobile/dist/PNotifyMobile.css'
import { notice, error, defaultModules, Stack } from '@pnotify/core'
import * as PNotifyMobile from '@pnotify/mobile'
// defaultModules.set(PNotifyMobile, {swipeDismiss: true});

function onError() {
  error({
    title: 'Error!',
    text: 'Something went wrong.Please try again later',
    stack: myStack,
    hide: true,
    delay: 900,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    closer: true,
    closerHover: false
  });
}

function onFetchError() {
  notice({
    title: 'Hey buddy!',
    text: 'Please, check the entered value!',
    stack: myStack,
    hide: true,
    delay: 9000,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    closer: true,
    closerHover: false
  });
}

const myStack = new Stack({
  dir1: 'down', 
  dir2: 'right',
  firstpos1: 25,
  firstpos2: 25,
  push: 'bottom',
  maxOpen: 1,
  modules: new Map([
    ...defaultModules,
    [PNotifyMobile, {
      swipeDismiss: true
    }]
  ])
});

export { onError, onFetchError }