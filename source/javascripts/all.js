//= require jquery
//= require bootstrap-sprockets


$(function() {
   $('#js-theme-kanslia').click(function (){
      $(this).toggleClass('active');
      $('#js-theme-helfi').toggleClass('active');
      $('#theme-css').attr('href','stylesheets/kanslia/theme.css');
   });
   $('#js-theme-helfi').click(function (){
      $(this).toggleClass('active');
      $('#js-theme-kanslia').toggleClass('active');
      $('#theme-css').attr('href','stylesheets/helfi/theme.css');
   });

});