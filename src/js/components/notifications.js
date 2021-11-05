import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/Angeler.css'
import  '@pnotify/mobile/dist/PNotifyMobile.css'
import { notice, error, defaultModules, Stack, } from '@pnotify/core'
import * as PNotifyMobile from '@pnotify/mobile'

defaultModules.set(PNotifyMobile, { 
  swipeDismiss: true
});


function onError() {
  error({
    type: 'error',
    title: 'Error!',
    text: 'Something went wrong.Please try again later',
    stack: myStack,
    hide: true,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    closer: true,
  });
}

function onFetchError() {
  notice({
    type: 'notice',
    title: 'Hey buddy!',
    text: 'Please, check the entered value!',
    stack: myStack,
    hide: true,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    closer: true,
});
}

const myStack = new Stack({
  dir1: 'down', 
  dir2: 'down',
  delay: 900,
  firstpos1: 25,
  firstpos2: 25,

  closerHover: false,
  types: [
    {
      type: 'error',
      duration: 400,
      dismissible: true,
    },
    {
      type: 'notice',
      duration: 200,
      dismissible: true,
    },
  ]
});

export { onError, onFetchError }

