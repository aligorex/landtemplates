(function( $ ){

    $isMobile=false;
    /* isWidthLimited = $(window).width() <= 1024; */
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $isMobile=true;
    }
    window.isMobile=$isMobile;

    if($isMobile == false){

        if($(window).width() < 1441){
            $(document).ready(function(){

                $( '#videoCol' ).removeClass( 't-col_7' );
                $( '#videoCol' ).addClass( 't-col_6' );
                $( '#videoCol' ).addClass( 't-prefix_1' );

                // $( '#formCol' ).removeClass( 't-col_4' );
                // $( '#formCol' ).addClass( 't-col_3' );

            });
        }
    }

})( jQuery );


$(document).ready(function () {
    t228_highlight();
});

$(window).resize(function () {
    t228_setWidth('6319850');
});

$(window).load(function () {
    t228_setWidth('6319850');
});

$(document).ready(function () {
    t228_setWidth('6319850');
});

$(window).resize(function () {
    t228_setBg('6319850');
});

$(document).ready(function () {
    t228_setBg('6319850');
});

$(document).ready(function () {
    var div=$("#youtubeiframe6394250");
    var form_height = $( '#formCol' ).height();

    div.height(form_height);
    div.parent().height(form_height);
});

$(document).ready(function () {
    $("#rec6319533").attr('data-animationappear', 'off');
    $("#rec6319533").css('opacity', '1');
});

$(document).ready(function () {
    t228_highlight();
});

$(window).resize(function () {
    t228_setWidth('63198505');
});

$(window).load(function () {
    t228_setWidth('63198505');
});

$(document).ready(function () {
    t228_setWidth('63198505');
});

$(window).resize(function () {
    t228_setBg('63198505');
});

$(document).ready(function () {
    t228_setBg('63198505');
});
