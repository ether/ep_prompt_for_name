exports.aceInitInnerdocbodyHead = function(hook_name, args, cb) {
  args.iframeHTML.push('<script type="text/javascript" src="../static/plugins/ep_dont_prompt/static/js/ace_inner.js"></script>');
  return cb();
};
