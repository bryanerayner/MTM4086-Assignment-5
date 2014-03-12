
$(document).ready(function(){

$(".productPhotos .clearing-thumbs li a").on("click", function(e)
{
  var $t = $(this);
  $("#featuredImage").html($("#"+$t.attr("data-htmlSrc")).html());
  e.preventDefault();
  window.picturefill();
}); 

});
