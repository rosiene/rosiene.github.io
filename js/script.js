$( document ).ready(function() {
    console.log('ready');

    $('#menu-label').on('click', function(){
      $('aside').animate({
        width: 'toggle'
      });
      $('.page-overlay').show();
    });
    $('#menu-back').on('click', function(){
      $('aside').hide();
      $('.page-overlay').hide();
    });

    $('.page-overlay').on('click', function(){
      $('aside').hide();
      $('.page-overlay').hide();
    });

    $('#Label1 h2').on('click', function(){
      if ( $('#Label1 div').is( ':hidden' ) ) {
        $('#Label1 div').slideDown();
      }else{
        $('#Label1 div').slideUp();
      }
    });

    $('#Label2 h2').on('click', function(){
      if ( $('#Label2 div').is( ':hidden' ) ) {
        $('#Label2 div').slideDown();
      }else{
        $('#Label2 div').slideUp();
      }
    });

    $('#Label3 h2').on('click', function(){
      if ( $('#Label3 div').is( ':hidden' ) ) {
        $('#Label3 div').slideDown();
      }else{
        $('#Label3 div').slideUp();
      }
    });

    $('#Label4 h2').on('click', function(){
      if ( $('#Label4 div').is( ':hidden' ) ) {
        $('#Label4 div').slideDown();
      }else{
        $('#Label4 div').slideUp();
      }
    });

    //SLIDER
    var slideIndex = 1;

    $('#buttonPrev').on('click', function(){
      plusDivs(-1);
    });
    $('#buttonNext').on('click', function(){
      plusDivs(1);
    });

    if (screen.width < 768){
      showDivs(slideIndex);
    }

    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("img-slider");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
    }

});
