//= require jquery
//= require bootstrap-sprockets


$(function() {
   $('#js-theme-kanslia').click(function (){
      $(this).toggleClass('active');
      $('#js-theme-helfi').toggleClass('active');
      $('link[href="/stylesheets/helfi/theme.css"]').attr('href','/stylesheets/kanslia/theme.css');
   });
   $('#js-theme-helfi').click(function (){
      $(this).toggleClass('active');
      $('#js-theme-kanslia').toggleClass('active');
      $('link[href="/stylesheets/kanslia/theme.css"]').attr('href','/stylesheets/helfi/theme.css');
   });

});