$(document).bind("keyup", function(e) {
  if(!parent.parent.pad.myUserInfo.name){
    clearTimeout(timer);
    var timer = setTimeout(function(){
      if ( !parent.parent.$('#users').hasClass('popup-show') ){
        parent.parent.$('#users').addClass('popup-show');
      }
    },5000);
  }
});
