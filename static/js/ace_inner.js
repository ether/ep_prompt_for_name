// Borrowed from: https://github.com/redhog/ep_sketchspace/blob/master/static/js/ace_inner.js

$(document).bind("keyup", function(e) {
  if(!parent.parent.pad.myUserInfo.name){
    clearTimeout(timer);
    var timer = setTimeout(function(){
      if ( !parent.parent.$('#users').is(':visible') ){
        parent.parent.$('#users').show();
      }
    },5000);
  }
});
