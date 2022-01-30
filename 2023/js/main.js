(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        // slicknav
        if ($.fn.slicknav) {
            $('.main-menu').slicknav({
                appendTo: '.menu-col',
                allowParentLinks: true
            });
        }
        //        $(".search-icon").on('click', function () {
        //            $('.search-trigger').toggleClass('display-block');
        //        });


        if ($.fn.owlCarousel) {
            $('.slider-wrapper').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                nav: true,
                mouseDrag: false,
                smartSpeed: 500,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            })
        }
        if ($.fn.owlCarousel) {

            $('.pricing_carousel').owlCarousel({
                loop: true,
                items: 1,
                dotsEach: false,
                autoplay: false,
                margin: 30,
                nav: false,
                mouseDrag: true,
                smartSpeed: 500,
                dots: true,
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    320: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 1
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 1
                    },
                    // breakpoint from 768 up
                    992: {
                        items: 1
                    }
                }
            });


            //        if ($.fn.counterUp) {
            //            $('.counter').counterUp({
            //                delay: 10,
            //                time: 5000
            //            });
            //        }

            //        if ($.fn.magnificPopup) {
            //            $(".video-play-btn").magnificPopup({
            //                type: 'video',
            //                src: 'img/video-img.jpg',
            //            });
            //        }

            function custom_code() {
                if (pro.sub - menu.length) {
                    pro.sub - menu.each(function () {
                        $(this).closest('li').addClass('has-dropdown');
                    });
                }
            }


            //        $('select').niceSelect();


        }


    });

}(jQuery));