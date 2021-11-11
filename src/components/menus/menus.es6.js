/**
 * @file
 * Attach behaviors for the Menus.
 */

!((document, Drupal, $) => {
  'use strict';

  /**
   * Setup and attach the Menu functionality.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.standardAccordionMenu = {
    attach: function (context) {

      // Setup Standard menu accordion triggers.
      const $standardAccordionMenuTriggers = $('.menu-type--standard .mc__navbar__trigger', context).once('init__standardAccordionMenu'); // eslint-disable-line max-len
      $standardAccordionMenuTriggers.on('click', function() {
        $(this)
          .parent('.mc__nav__menu__item')
          .toggleClass('is-open');
      });

    }
  };
})(document, Drupal, jQuery);
