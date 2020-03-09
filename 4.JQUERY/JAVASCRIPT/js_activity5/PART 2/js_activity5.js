$(document).ready(function(){
  $("button").click(function(){
    $("#sqr").animate({
    	width: "300px"}, 400);
    $("#sqr").animate({
    	height: "300px"}, 400);
    $("#sqr").animate({
    	marginLeft: "200px"}, 400);
    $("#sqr").animate({
    	width: "350px",
    	height: "350px",
    	borderWidth: "10px"}, 300);
    $("#sqr").animate({
    	opacity: 0.5}, 300);
  });
});