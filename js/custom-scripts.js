$(document).ready(function() {

    $('.color-input').each( function( i, elem ) {
        var hueb = new Huebee( elem, {
            notation: 'hex'
        });
    });

});