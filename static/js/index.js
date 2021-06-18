'use strict';

exports.aceInitialized = (hookName, context) => {
  const innerWindow = window.frames.ace_outer.frames.ace_inner;
  let timer;
  innerWindow.$(innerWindow.document).bind('keyup', (e) => {
    if (!pad.myUserInfo.name) {
      innerWindow.clearTimeout(timer);
      timer = innerWindow.setTimeout(() => $('#users').addClass('popup-show'), 5000);
    }
  });
};
