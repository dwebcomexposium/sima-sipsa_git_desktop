/* Google-traduction */

;
jQuery( document ).ready(function( $ ) {
$('.flag-icon-dz').click(function() {
      var lang = 'Arab';
      var $frame = $('.goog-te-menu-frame:first');
      if (!$frame.size()) {
        console.log("Error: Could not find Google translate frame.");
        return false;
      }
      $frame.contents().find('.goog-te-menu2-item span.text:contains('+lang+')').get(0).click();
      $("li.ql-item.linkid188546").after("<li class='ql-item linkid18854777 closegoogle'><a href='#' class='btn-primary' target='_self'><i class='icon closegoogle ls-lang-frr' aria-hidden='true'></i></a></li>").fadeIn('fast');
      if(window.location.href.indexOf("en.") > -1) {
       $('li.ql-item.linkid18854777.closegoogle > a > i').css("background-image", "url('/theme/sima-sipsa_desktop/img/uk.png')");
       $('li.ls-lang-item.ls-lang-en.is-active').fadeOut('fast');
      }
      $('.skiptranslate').css('visibility', 'hidden');
      $('li.ql-item.linkid188546').fadeOut('fast');
      $('li.ls-lang-item.ls-lang-fr.is-active').fadeOut('fast');
      setInterval( function() {
          $('body').css("top", "0"); 
        }, 0);
      return false;
   }); 
  window.setInterval(function(){$('.closegoogle').on("click",function(){
    $('.skiptranslate').contents().find('.goog-close-link > img').click();
    $('li.ql-item.linkid18854777').fadeOut('fast').remove();
    $('li.ql-item.linkid188546').fadeIn('fast');
    if (window.location.href.indexOf("en.") > -1) {
    $('li.ls-lang-item.ls-lang-en.is-active').fadeIn('fast');
    }
    $('li.ls-lang-item.ls-lang-fr.is-active').fadeIn('fast');
  }); }, 1000);

});