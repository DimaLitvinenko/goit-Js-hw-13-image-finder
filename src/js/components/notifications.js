import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/Angeler.css'

import  '@pnotify/mobile/dist/PNotifyMobile.css';

import { notice, error, defaultModules, Stack } from '@pnotify/core'
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});


const onError = {
    type: `${error}`,
    text: 'Error! No correct query. Try again!',
    hide: true,
    delay: 800,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    closer: true,
    closerHover: false,
    stack : new Stack ({ 
      dir1: 'down',  
      dir2: 'right',  // Позиция от верхнего левого угла. 
      firstpos1: 90,  
      firstpos2: 10  // 90 пикселей сверху, 90 пикселей слева. 
    }) 
};

const onNotice = {
    type: `${notice}`,
    text: 'Error! No correct query. Try again!',
    hide: true,
    delay: 800,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    closer: true,
    closerHover: false,
    stack : new Stack ({ 
      dir1: 'down',  
      dir2: 'right',  // Позиция от верхнего левого угла. 
      firstpos1: 90,  
      firstpos2: 10  // 90 пикселей сверху, 90 пикселей слева. 
    }) 
};

export { onError, onNotice }