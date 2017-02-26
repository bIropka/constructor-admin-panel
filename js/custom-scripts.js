$(document).ready(function() {

    /*******************************************************************************************************************
    ************** initial scripts
    *******************************************************************************************************************/

    setTimeout(function() {
        $('.wrapper').css('opacity', '1');
    }, 500);

    setTimeout(function() {
        $('.nav').css('left', '5px');
    }, 1000);

    $('.wrapper').mCustomScrollbar();

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

        } else if ($(this).hasClass('btn-edit-text')) {

        } else if ($(this).hasClass('btn-edit-styles')) {

        } else if ($(this).hasClass('btn-choose-grid')) {

        } else if ($(this).hasClass('btn-edit-background-width')) {

            if($(this).hasClass('active') || !$('.btn-edit-info').hasClass('active')) {
                $('.width-and-colors').toggleClass('active');
            } else {
                setTimeout(function() {
                    $('.width-and-colors').toggleClass('active');
                }, 500);
            }
            $('.btn-edit-info').removeClass('active');
            $(this).toggleClass('active');
            $('.general-settings').removeClass('active');

        } else if ($(this).hasClass('btn-edit-info')) {

            if($(this).hasClass('active') || !$('.btn-edit-background-width').hasClass('active')) {
                $('.general-settings').toggleClass('active');
            } else {
                setTimeout(function() {
                    $('.general-settings').toggleClass('active');
                }, 500);
            }
            $('.btn-edit-background-width').removeClass('active');
            $(this).toggleClass('active');
            $('.width-and-colors').removeClass('active');


        } else if ($(this).hasClass('btn-save-template')) {

        }

    });

    $('input[type="file"]').change(function() {

        var fileName = $(this).val().split('\\');
        $('<span class="file-name">' + fileName[fileName.length - 1] + '</span>').insertAfter($(this));

    });


});