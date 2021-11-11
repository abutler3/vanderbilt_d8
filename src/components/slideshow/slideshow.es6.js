/* eslint-disable max-len */
!((document, Drupal, $) => {
  'use strict';

  /**
   * Slideshow component behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.slideshow = {
    attach: function(context) {
      const $slideshow = $('.slideshow', context).once('init_slideshow');
      if ($slideshow.length && $.isFunction($.flexslider)) {
        const $flexsliderHomepage = $slideshow.find('.flexslider--homepage');
        const $flexsliderFull = $slideshow.find('.flexslider--full');
        const $flexsliderRotating = $slideshow.find('.flexslider--rotatingimage');
        const $flexsliderGallery = $slideshow.find('.flexslider--thumbnailgallery.slideshow__container');
        const $flexsliderThumbs = $slideshow.find('.flexslider--thumbnailgallery.slideshow__thumbs');

        $slideshow.each(function() {
          const $currentSlider = $(this).find('.flexslider');
          if ($currentSlider.is($flexsliderHomepage)) {
            $flexsliderHomepage.flexslider({
              easing: 'swing',
              animation: 'slide',
              touch: false,
              pauseOnHover: true,
              controlNav: true,
              before: function(slider) {
                slider.parent().find('.hero-caption').hide();
              },
              start: function(slider) {
                $('body').removeClass('loading');
                if(slider.find('.flex-active-slide').find('figcaption').length) {
                  slider.parent().find('.hero-caption').html(slider.find('.flex-active-slide').find('figcaption').html());
                  slider.parent().find('.hero-caption').slideDown(400);
                }
              },
              after: function(slider) {
                if(slider.find('.flex-active-slide').find('figcaption').length) {
                  slider.parent().find('.hero-caption').html(slider.find('.flex-active-slide').find('figcaption').html());
                  slider.parent().find('.hero-caption').fadeIn(400);
                }
              }
            });
          }
          else if ($currentSlider.is($flexsliderFull)) {
            $flexsliderFull.flexslider({
              animation: 'fade',
              pauseOnHover: true
            });
          }
          else if ($currentSlider.is($flexsliderRotating)) {
            $flexsliderRotating.flexslider({
              animation: 'fade',
              pauseOnHover: true
            });
          }
          else if ($currentSlider.is($flexsliderThumbs)) {
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
})(document, Drupal, jQuery);
