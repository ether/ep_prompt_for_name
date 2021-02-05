'use strict';
let timer;

$(document).bind('keyup', (e) => {
  if (!parent.parent.pad.myUserInfo.name) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!parent.parent.$('#users').hasClass('popup-show')) {
        parent.parent.$('#users').addClass('popup-show');
      }
    }, 5000);
  }
});
