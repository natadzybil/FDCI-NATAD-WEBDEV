$(document).ready(function(){
  $("button").click(function(){
   thisClick();
  });
});

function thisClick() {
    $("#sqr").animate({
    'margin-left': '+=25px',
    'margin-top' : '+=25px',
    'width' : '+=100px',
    'height' : '+=100px'
    },'slow');
}