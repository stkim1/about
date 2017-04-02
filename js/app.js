$(document).ready(function(){
  
  /* CARD FLIP
  /////////////////////////////////////////////////////////////////*/
  $('.card .front').append('<span class="flip_back"></span>');
  $('.card .back').append('<span class="flip_front"></span>');
  
  $('.card').click(function(e){
    if($(this).hasClass('flip')){
      if(e.target.tagName == "A"){
        window.open(e.target.href);
        e.preventDefault();
      }else{
        $(this).removeClass('flip');
      }
    }else{
      if(e.target.tagName == "A"){
        window.open(e.target.href);
        e.preventDefault();
      }else{
        $(this).addClass('flip');
      }
    }
  });
});
