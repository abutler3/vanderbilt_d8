/**
 * @file
 * Attach behaviors for the Menus.
 */

!function (document, Drupal, $) {
  'use strict';

  /**
   * Setup and attach the Menu functionality.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.standardAccordionMenu = {
    attach: function attach(context) {

      // Setup Standard menu accordion triggers.
      var $standardAccordionMenuTriggers = $('.menu-type--standard .mc__navbar__trigger', context).once('init__standardAccordionMenu'); // eslint-disable-line max-len
      $standardAccordionMenuTriggers.on('click', function () {
        $(this).parent('.mc__nav__menu__item').toggleClass('is-open');
      });
    }
  };

    Drupal.behaviors.dropDownMainNav = {
    attach: function attach(context) {

      // Setup Standard menu accordion triggers.
      // var $standardAccordionMenuTriggers = $('.menu-type--standard .mc__navbar__trigger', context).once('init__standardAccordionMenu'); // eslint-disable-line max-len
      // $standardAccordionMenuTriggers.on('click', function () {
      //   $(this).parent('.mc__nav__menu__item').toggleClass('is-open');
      // });

      $(".p-v-menu").on('click', function () {
        $(this).find('button').toggleClass("activeDropDownButton active");
        $('#patients--visitors-slideout').toggleClass("active");
        $('#patients--visitors-slideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        if ($('#healthcare-professionals-slideout').hasClass("active")) {
          console.log("Active present for hcp-menu");
          $('#healthcare-professionals-slideout').removeClass("active");
          $('#healthcare-professionals-slideout').slideToggle('slow').css("display","none").css("opacity","0");
          $('.hcp-menu').find('button').removeClass("activeDropDownButton active");
          // $('#healthcare-professionals-slideout').toggleClass("active");
          // $('#healthcare-professionals-slideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        }
        if ($('#desktopSearchFormSlideout').hasClass("active")) {
          $('.search-menu').find('button').removeClass("activeDropDownButton active");
          $('#desktopSearchFormSlideout').removeClass("active");
          $('#desktopSearchFormSlideout').slideToggle('slow').css("display","none").css("opacity","0");
        }
        
      });

       $(".hcp-menu").on('click', function () {
        $(this).find('button').toggleClass("activeDropDownButton active");
        $('#healthcare-professionals-slideout').toggleClass("active");
        $('#healthcare-professionals-slideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        if ($('#patients--visitors-slideout').hasClass("active")) {
          console.log("Active present for p-v-menu");
          $('#patients--visitors-slideout').removeClass("active");
          $('#patients--visitors-slideout').slideToggle('slow').css("display","none").css("opacity","0");
          $('.p-v-menu').find('button').toggleClass("activeDropDownButton active");
          // $('#desktopSearchFormSlideout').toggleClass("active");
          // $('#desktopSearchFormSlideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        }
        if ($('#desktopSearchFormSlideout').hasClass("active")) {
          $('.search-menu').find('button').toggleClass("activeDropDownButton active");
          $('#desktopSearchFormSlideout').removeClass("active");
          $('#desktopSearchFormSlideout').slideToggle('slow').css("display","none").css("opacity","0");
        }

      });

       $(".search-menu").on('click', function () {
        $(this).find('button').toggleClass("activeDropDownButton active");
        $('#desktopSearchFormSlideout').toggleClass("active");
        $('#desktopSearchFormSlideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        if ($('#patients--visitors-slideout').hasClass("active")) {
          console.log("Active present for p-v-menu");
          $('#patients--visitors-slideout').removeClass("active");
          $('#patients--visitors-slideout').slideToggle('slow').css("display","none").css("opacity","0");
          $('.p-v-menu').find('button').removeClass("activeDropDownButton active");
          // $('#desktopSearchFormSlideout').toggleClass("active");
          // $('#desktopSearchFormSlideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        }
        if ($('#healthcare-professionals-slideout').hasClass("active")) {
          console.log("Active present for hcp-menu");
          $('#healthcare-professionals-slideout').removeClass("active");
          $('#healthcare-professionals-slideout').slideToggle('slow').css("display","none").css("opacity","0");
          $('.hcp-menu').find('button').removeClass("activeDropDownButton active");
          // $('#healthcare-professionals-slideout').toggleClass("active");
          // $('#healthcare-professionals-slideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        }

      });

      $(".data-tracker-mobileSearchButton, .data-tracker-mobileHamburgerButton").on('click', function () {
        if ($('#MobileHeaderBarContainer').hasClass("isMenuVisible")) {
          console.log("Active present for p-v-menu");
          $('#MobileHeaderNavContainer, #MobileHeaderBarContainer').toggleClass("isMenuVisible");
          $('.module___vpim2fK4XZzhV1pZfPmk').css("display","block");
          $('.module__3feCh5nUj1ByVtpdXkLDJI').css("display","block");
          $('.data-tracker-mobileSearchButton').css("display","inline-block");
          $('.module__1frfn9nO2TTXGJHEnfQBX').css("display","none");
          $('.module__2WXwbrXYtCYOp2WkNLNg5g').css("display","none");
          $('#desktopSearchFormSlideout').toggleClass("active");
          $('#desktopSearchFormSlideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        } else {
          $('#MobileHeaderNavContainer, #MobileHeaderBarContainer').toggleClass("isMenuVisible");
          $('.module___vpim2fK4XZzhV1pZfPmk').css("display","none");
          $('.module__3feCh5nUj1ByVtpdXkLDJI').css("display","none");
          $('.module__1frfn9nO2TTXGJHEnfQBX').css("display","block"); 
          $('.data-tracker-mobileSearchButton').css("display","none");
          $('.module__2WXwbrXYtCYOp2WkNLNg5g').css("display","block");
          $('#desktopSearchFormSlideout').toggleClass("active");
          $('#desktopSearchFormSlideout').slideToggle('slow').css("display","flex").css("opacity","1").css("display","-webkit-box").css("display","-ms-flexbox");
        }

      }); 
        

      
    }
  };


}(document, Drupal, jQuery);
//# sourceMappingURL=menus.js.map
