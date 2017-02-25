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

    $('.width-and-colors').mCustomScrollbar();

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

        switch ($(this).attr('class')) {

            case 'btn-show-result':

                break;

            case 'btn-add-element':

                break;

            case 'btn-edit-text':

                break;

            case 'btn-edit-styles':

                break;

            case 'btn-choose-grid':

                break;

            case 'btn-edit-background-width':
                $('.general-settings').removeClass('active');
                setTimeout(function() {
                    $('.width-and-colors').toggleClass('active');
                }, 600);
                break;

            case 'btn-edit-info':
                $('.width-and-colors').removeClass('active');
                setTimeout(function() {
                    $('.general-settings').toggleClass('active');
                }, 600);
                break;

            case 'btn-save-template':

                break;

        }

    });


});