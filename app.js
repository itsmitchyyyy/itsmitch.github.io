$(function() {
    $.get("https://photos.google.com/u/2/album/AF1QipMxNBjEVSqT1LzvS4KOsUEDDqPhy7ElTpy22GhX").then(function(result) {
        console.log(result);
    });
    // var imgFolder = "/includes/img";

    // $.get(imgFolder).then(function(result, status) {
    // $(result).find("a").attr('href', function(index, value) {
    //     if( value.match(/\.(jpe?g|png|gif)$/) ) { 
    //         $('.carousel').append(`<a class="carousel-item" href="#"><img src="`+ value + `"></a>`);

    //     }
    // });
    // }).done(function(){
    //     $('.carousel').carousel({
    //         onCycleTo: function(data) {
    //             var img = $(data).find('img').attr('src');
    //             $('.carousel').css('background-image', 'url('+img+')');
    //         }
    //     });
    // });
});