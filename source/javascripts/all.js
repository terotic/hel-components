//= require jquery
//= require bootstrap-sprockets
//= require feedback-modal

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

   $('#js-navbar-toggler').click(function (){
      $(this).toggleClass('is-closed');
      $('#js-navbar-toggler .glyphicon').toggleClass('glyphicon-remove');
      $('#js-navbar-toggler .glyphicon').toggleClass('glyphicon-menu-hamburger');
      $('#js-side-nav').toggleClass('is-hidden');
      $('#js-site-content').toggleClass('is-full');
   });

});