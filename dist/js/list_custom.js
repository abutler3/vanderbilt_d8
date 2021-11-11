/**
 * @file
 * Attach behaviors for the List JS.
 */

!function (document, Drupal, $) {
  'use strict';

  /**
   * Setup and attach the List JS javascript code.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.listJs = {
    attach: function attach(context) {

      // var userList = new List(String(faq_id), options);
      var search = document.getElementById( 'accordion_search_bar' );
      // console.log(search);
      var accordions = document.querySelectorAll( '.faqfield-question' );
      // var accordion_open = document.querySelectorAll( '.ui-accordion-content-active' );
      // var accordion_id = document.getElementById( 'ui-id-2' );
      // var accordions = document.querySelectorAll( '.faqfield-answer' );
      // console.log(accordions);
      // console.log(accordion_open);
      // Array.prototype.forEach.call( accordions, function( accordion ) {
      //     accordion.querySelector( 'button' ).addEventListener( 'click', function() {
      //         this.nextElementSibling.classList.add( 'active' );
      //     } );
      // } );

      // Apply search

      // If the question is set to display none, the answer should be set to display: none
      // Set button to clear
/**
 * @file
 * Attach behaviors for the List JS.
 */

!function (document, Drupal, $) {
  'use strict';

  /**
   * Setup and attach the List JS javascript code.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.listJs = {
    attach: function attach(context) {

      // var userList = new List(String(faq_id), options);
      var search = document.getElementById( 'accordion_search_bar' );
      // console.log(search);
      var accordions = document.querySelectorAll( '.faqfield-question' );
      // var accordion_open = document.querySelectorAll( '.ui-accordion-content-active' );
      // var accordion_id = document.getElementById( 'ui-id-2' );
      // var accordions = document.querySelectorAll( '.faqfield-answer' );
      // console.log(accordions);
      // console.log(accordion_open);
      // Array.prototype.forEach.call( accordions, function( accordion ) {
      //     accordion.querySelector( 'button' ).addEventListener( 'click', function() {
      //         this.nextElementSibling.classList.add( 'active' );
      //     } );
      // } );

      // Apply search

      // If the question is set to display none, the answer should be set to display: none
      // Set button to clear
      if (search) {

              search.addEventListener( 'input', function() {
              var searchText = search.value.toLowerCase();
              var accordion_open = document.querySelectorAll( '.ui-accordion-content-active' );
              var accordion_id = document.getElementById( 'ui-id-2' );
              // console.log(searchText);
              Array.prototype.forEach.call( accordions, function( accordion ) {
                  // console.log(accordion_open);
                  // console.log(accordion_id);
                  if ( accordion.innerText.toLowerCase().indexOf( searchText ) >= 0 ) {
                      accordion.style.display = 'block';
                  }
                  else {
                      accordion.style.display = 'none';
                      if (accordion_open[0] === "undefined") {
                        accordion_id.style.display = 'none';
                      } else {
                        accordion_open[0].style.display = 'none';
                      }
                      // accordion_open[0].style.display = 'none';
                      // if (typeof accordion_open === "undefined" || accordion_open.length == 0 ) {
                      //   // accordion_open[0].style.display = 'none';
                      // } else if (typeof accordion_open != "undefined") {
                      //   var i;
                      //   for (i = 0; i < accordion_open.length; i++) {
                      //     if (accordion_open[i]) {
                      //       accordion_open[i].style.display = 'none';
                      //     }
                      //   }
                      // } else {
                      //   accordion_open[0].style.display = 'none';
                      // }
                  }
              } );
          } );

      }

    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=list_custom.js.map

    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=list_custom.js.map
