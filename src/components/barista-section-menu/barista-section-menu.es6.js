/**
 * @file
 * Attach behaviors for the Barista Section menu.
 */

!((document, Drupal, $) => {
  'use strict';

  /**
   * Setup and attach the Barista Section menu.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.baristaSectionMenu = {
    attach: function (context) {

      const $baristaSectionMenuTriggers = $('.section-menu__trigger', context)
                                          .once('init__baristaSectionMenu');

      // Setup Standard menu accordion triggers.
      $baristaSectionMenuTriggers.on('click', function() {
        const $parent = $(this).parent('.section-menu__item--has-children');
        // Not using toggleClass to ensure both classes
        // are not accidentally applied at same time.
        if ($parent.hasClass('is-open')) {
          $parent.addClass('is-closed');
          $parent.removeClass('is-open');
        }
        else {
          $parent.addClass('is-open');
          $parent.removeClass('is-closed');
        }
      });
    }
  };
})(document, Drupal, jQuery);
