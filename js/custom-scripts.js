$(document).ready(function() {

    /*******************************************************************************************************************
    ************** initial scripts
    *******************************************************************************************************************/

    setTimeout(function() {
        $('.content-panel').css('opacity', '1');
        $('.header-default').css('opacity', '1');
    }, 500);

    setTimeout(function() {
        $('.nav').css('left', '5px');
    }, 1000);

    $('.content-panel').mCustomScrollbar();

    $('.width-and-colors').mCustomScrollbar();

    $('.general-settings').mCustomScrollbar();

    $('.color-input').click(function() {

        if($(this).parent().position().top > $(this).parents('form').height() - 260) {
            $(this).next('.huebee').css({'top' : 'auto', 'bottom' : '250px'});
        }

    });



    /*******************************************************************************************************************
     ************** color picker
     *******************************************************************************************************************/

    $('.color-input').each( function( i, elem ) {
        var huebee = new Huebee( elem, {
            notation: 'hex'
        });
    });

    /*******************************************************************************************************************
     ************** clicks
     ******************************************************************************************************************/

    $('.nav li').click(function() {

        if ($(this).hasClass('btn-show-result')) {

        } else if ($(this).hasClass('btn-add-element')) {

            $('.btn-edit-info').removeClass('active');
            $('.btn-edit-background-width').removeClass('active');
            $('.left-tab:not(".elements")').removeClass('active');
            $(this).toggleClass('active');

            setTimeout(function() {
                $('.elements').toggleClass('active');
            }, 400);

        } else if ($(this).hasClass('btn-edit-text')) {

        } else if ($(this).hasClass('btn-edit-styles')) {

        } else if ($(this).hasClass('btn-choose-grid')) {

            $(this).toggleClass('active');
            $('.top-tab:not(".grids")').removeClass('active');
            $('.elements-item .item').removeClass('active');

            setTimeout(function() {
                $('.top-tab.grids').toggleClass('active');
            }, 400);

        } else if ($(this).hasClass('btn-edit-background-width')) {

            $(this).toggleClass('active');
            $('.btn-edit-info').removeClass('active');
            $('.btn-add-element').removeClass('active');
            $('.left-tab:not(".width-and-colors")').removeClass('active');

            setTimeout(function() {
                $('.width-and-colors').toggleClass('active');
            }, 400);

        } else if ($(this).hasClass('btn-edit-info')) {

            $(this).toggleClass('active');
            $('.btn-edit-background-width').removeClass('active');
            $('.btn-add-element').removeClass('active');
            $('.left-tab:not(".general-settings")').removeClass('active');

            setTimeout(function() {
                $('.general-settings').toggleClass('active');
            }, 400);

        } else if ($(this).hasClass('btn-save-template')) {

        }

    });

    $('input[type="file"]').change(function() {

        var fileName = $(this).val().split('\\');
        $('<span class="file-name">' + fileName[fileName.length - 1] + '</span>').insertAfter($(this));

    });

    $('.elements-control li').click(function() {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');

        $(this).parent().siblings('.elements-item.active').removeClass('active');
        $(this).parent().siblings('.elements-item').eq($(this).index()).addClass('active');

    });

    $('.elements-item .item-logo').click(function() {

        $(this).siblings('.active').removeClass('active');
        $(this).toggleClass('active');
        $('.btn-choose-grid').removeClass('active');

        $('.top-tab:not(".logos")').removeClass('active');
        setTimeout(function() {
            $('.top-tab.logos').toggleClass('active');
        }, 400);

    });

    $('.logos-control li').click(function() {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $('.logos-slider-1').css('margin-top', $(this).index() * (-190) + 'px');

    });

    $('.grids-control li').click(function() {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $('.grids-slider-1').css('margin-top', $(this).index() * (-190) + 'px');

    });



    /*******************************************************************************************************************
     ************** sliders
     ******************************************************************************************************************/

    $('.slider.logos-slider-1').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.logos-slider-2').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.logos-slider-3').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.logos-slider-4').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.grids-slider-1').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.grids-slider-2').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.grids-slider-3').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.slider.grids-slider-4').slick({
        slidesToShow: 9,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

});