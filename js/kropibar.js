$( ".sidebar" ).click(function() {
  $( "p" ).click(function(){
    $("p").fadeOut()
    $(".sidebar").css('width', '70px')
  })
});
$( ".sidebar" ).click(function() {
    $("p").fadeIn()
    $(".sidebar").css('width', '200px')
  });