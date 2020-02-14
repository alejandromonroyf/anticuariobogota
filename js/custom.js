$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2039753877',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2039753877.1677ed0.0145471186df4e86a8ca9ea4590d6fc3',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});