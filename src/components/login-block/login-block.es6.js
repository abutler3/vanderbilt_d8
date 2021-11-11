/**
  * @file
  * Attach behaviors for the Login.
  */

!((document, Drupal, $) => {
  'use strict';

  /**
   * Setup and attach the Login Toggle.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.loginToggle = {
    attach: function (context) {
      const $togglingClass = $('.js-login-toggle');

      // We need to show/hide login options.
      $togglingClass.on( 'click', function() {
        const $self = $(this);
        $self.closest('.edit-cas-identifier')
          .find('.js-login')
          .toggleClass('js-login-hidden');
      });

    }
  };
})(document, Drupal, jQuery);
