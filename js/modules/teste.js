/* Google traduction */

;
jQuery( document ).ready(function( $ ) {$('.flag-icon-dz').click(function() {
     var lang = 'Arabe'
     var $frame = $('.goog-te-menu-frame:first');
     if (!$frame.size()) {
       console.log("Error: Could not find Google translate frame.");
       return false;
     }
     $frame.contents().find('.goog-te-menu2-item span.text:contains('+lang+')').get(0);
     return false;
   });
});
