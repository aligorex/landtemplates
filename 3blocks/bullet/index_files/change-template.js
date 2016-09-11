$( function() {

    $( '.btn-template' ).click( function ( e ) {

        $( '#changetemplateform-title' ).val( $('#stepHeaderTitle').text().trim() );
        $( '#changetemplateform-phone' ).val( $('#stepHeaderPhone').text().trim() );
        $( '#changetemplateform-email' ).val( $('#stepEmail').text().trim() );
        $( '#changetemplateform-address' ).val( $('#stepAddress').text().trim() );
        $( '#changetemplateform-law' ).val( $('#stepLaw').text().trim() );
        $( '#changetemplateform-header1' ).val( $('#stepHeader' ).text().trim() );
        $( '#changetemplateform-header2' ).val( $('#stepFacts').text().trim() );
        $( '#changetemplateform-youtube_link' ).val( $('#youtubeVideo').val().trim() );
        $( '#changetemplateform-form_id' ).val( $('#hiddenFormId' ).val().trim() );
        $( '#changetemplateform-region' ).val( $('#stepRegion').text().trim() );
        $( '#changetemplateform-form_caption' ).val( $('#stepFormCaption' ).text().trim() );
        $( '#changetemplateform-form_button' ).val( $( '#stepFormButton' ).text().trim() );
        $( '#changetemplateform-background_video_link' ).val( $('#youtubeVideoBg').val().trim() );
        $( '#changetemplateform-template_id' ).val( $( this ).val() );
        $( '#changetemplateform-yandex_metrika_id' ).val( $('#yandexMetrikaId').val().trim() );
        $( '#changetemplateform-google_analytics_id' ).val( $('#googleAnalyticsId').val().trim() );

    } );

} );
