/* eslint-disable max-len */
!function (document, Drupal, $) {
  'use strict';

  /**
   * Slideshow component behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.slideshow = {
    attach: function attach(context) {
      var $slideshow = $('.slideshow', context).once('init_slideshow');
      if ($slideshow.length && $.isFunction($.flexslider)) {
        var $flexsliderHomepage = $slideshow.find('.flexslider--homepage');
        var $flexsliderFull = $slideshow.find('.flexslider--full');
        var $flexsliderRotating = $slideshow.find('.flexslider--rotatingimage');
        var $flexsliderGallery = $slideshow.find('.flexslider--thumbnailgallery.slideshow__container');
        var $flexsliderThumbs = $slideshow.find('.flexslider--thumbnailgallery.slideshow__thumbs');

        $slideshow.each(function () {
          var $currentSlider = $(this).find('.flexslider');
          if ($currentSlider.is($flexsliderHomepage)) {
            $flexsliderHomepage.flexslider({
              easing: 'swing',
              animation: 'slide',
              touch: false,
              pauseOnHover: true,
              controlNav: true,
              before: function before(slider) {
                slider.parent().find('.hero-caption').hide();
              },
              start: function start(slider) {
                $('body').removeClass('loading');
                if (slider.find('.flex-active-slide').find('figcaption').length) {
                  slider.parent().find('.hero-caption').html(slider.find('.flex-active-slide').find('figcaption').html());
                  slider.parent().find('.hero-caption').slideDown(400);
                }
              },
              after: function after(slider) {
                if (slider.find('.flex-active-slide').find('figcaption').length) {
                  slider.parent().find('.hero-caption').html(slider.find('.flex-active-slide').find('figcaption').html());
                  slider.parent().find('.hero-caption').fadeIn(400);
                }
              }
            });
          } else if ($currentSlider.is($flexsliderFull)) {
            $flexsliderFull.flexslider({
              animation: 'fade',
              pauseOnHover: true
            });
          } else if ($currentSlider.is($flexsliderRotating)) {
            $flexsliderRotating.flexslider({
              animation: 'fade',
              pauseOnHover: true
            });
          } else if ($currentSlider.is($flexsliderThumbs)) {
            // The slider being synced as navigation must be initialized first.
            $flexsliderThumbs.flexslider({
              animation: 'slide',
              animationLoop: false,
              controlNav: false,
              directionNav: false,
              itemWidth: 161,
              itemMargin: 0,
              slideshow: false,
              asNavFor: '.flexslider--thumbnailgallery.slideshow__container'
            });

            $flexsliderGallery.flexslider({
              animation: 'fade',
              animationLoop: false,
              controlNav: false,
              directionNav: false,
              slideshow: false,
              sync: '.flexslider--thumbnailgallery.slideshow__thumbs'
            });
          }
        });
      }
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=slideshow.js.map
