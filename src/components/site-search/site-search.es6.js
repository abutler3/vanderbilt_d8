!((document, Drupal, $) => {
  'use strict';

  /**
   * Site search component behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.siteSearch = {

    attach: function(context) {

      const $searchTrigger = $('.mc__sprite--search-icon', context).once('init_siteSearch'); // eslint-disable-line max-len
      if ($searchTrigger.length) {

        const $searchInput = $('.mc__search__input', context);

        $searchTrigger.on('click', function() {
          $searchInput.focus();
        });
      }

    }
  };

})(document, Drupal, jQuery);
