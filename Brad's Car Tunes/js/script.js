/**
 * Created by skylerbrown on 8/23/15.
 */

$("document").ready(function() {

    $("#slideshow").cycle();


    $(".modalClick").on('click', function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeIn()
            .find("#modal")
            .fadeIn();


    });


    /*Modal fade out*/

    $(".close").on("click", function (event) {
        event.preventDefault();
        $("#overlay")
            .fadeOut()
            .find("#modal")
            .fadeOut();


    });


    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(44.052389, -123.106439),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }


    google.maps.event.addDomListener(window, 'load', initialize);





});

