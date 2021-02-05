'use strict';

exports.aceInitInnerdocbodyHead = (hookName, args, cb) => {
  const url = '../static/plugins/ep_prompt_for_name/static/js/ace_inner.js';
  args.iframeHTML.push(
      `<script type="text/javascript" src="${url}"></script>`);
  cb();
};
