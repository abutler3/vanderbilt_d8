/**
  * @file
  * Attach behaviors for the Login.
  */

!function (document, Drupal, $) {
  'use strict';

  /**
   * Setup and attach the Login Toggle.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.loginToggle = {
    attach: function attach(context) {
      var $togglingClass = $('.js-login-toggle');
      // Get Saml link from form
      // var getSamllink = '';
      // if (document.querySelector('.login-block__vunet-not-use a')) {
      //   var getSamllink = document.querySelector('.login-block__vunet-not-use a').href;
      // }
      // if (getSamllink.indexOf('samllogin') >= 0) {
      //   document.querySelector('.cas-login-link').href = getSamllink;
      // }
      // // Get button link and replace with Saml
      // // Replace button href
      // console.log(getSamllink);

      // We need to show/hide login options.
      $togglingClass.on('click', function () {
        var $self = $(this);
        $self.closest('.edit-cas-identifier').find('.js-login').toggleClass('js-login-hidden');
      });
    }
  };

  Drupal.behaviors.getDestination = {
    attach: function attach(context) {
      // Save url of action form
      var action = document.getElementById('user-login-form').action;
      console.log(action);
      // Function to get query string
      function getParameterByName(name, url) {
          if (!url) url = action;
          console.log("2");
          name = name.replace(/[\[\]]/g, "\\$&");
          console.log(name);
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
              results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, " "));
      }
      var destination = getParameterByName('destination', action);
      console.log(destination);

      if (destination) {
        // Get CAS Link
        var cas_append = document.getElementById('edit-cas-login-link').href;
        cas_append += '?returnto=';
        cas_append += destination;
        console.log(cas_append);
       // Replace caslogin href link
        $("a#edit-cas-login-link").attr("href", cas_append);
      }
      
      
    }
  };


}(document, Drupal, jQuery);
//# sourceMappingURL=login-block.js.map
