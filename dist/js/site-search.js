!function (document, Drupal, $) {
  'use strict';

  /**
   * Site search component behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.siteSearch = {

    attach: function attach(context) {

      var $searchTrigger = $('.mc__sprite--search-icon', context).once('init_siteSearch'); // eslint-disable-line max-len
      if ($searchTrigger.length) {

        var $searchInput = $('.mc__search__input', context);

        $searchTrigger.on('click', function () {
          $searchInput.focus();
        });
      }
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=site-search.js.map
