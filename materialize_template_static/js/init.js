

//initialize swiper slider when document ready
$(document).ready(function () {

    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.parallax').parallax();

    var myPartnersSwiper = new Swiper ('.swiper-container', {

        // Optional parameters. For more parameters visit http://idangero.us/swiper/api/ or contact me.//

        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true
    });

    var myTestimonialSwiper = new Swiper ('.swiper-container-testimonials', {

        // Optional parameters. For more parameters visit http://idangero.us/swiper/api/ or contact me.//

        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true
    });

    /* Preloader Trigger and timing. Change value 1000 to number you like to meet your needings. */

    setTimeout(function () {
        $('body').addClass('loaded');
    },1000)
});



// Google Maps //

function initMap() {
    var uluru = {lat: 42.6750218, lng: 23.2929139};
    var mapCenter = {lat: 42.6750218, lng: 23.2840000};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: mapCenter,
        scrollwheel:false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]
    });

    var contentString = '<div class="maptooltip center" id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h6 id="firstHeading" class="firstHeading">InfinityLabs</h6>'+
        '<h6 id="firstHeading" class="firstHeading">Sofia, Bulgaria</h6>'+
        '<div id="bodyContent">'+
        '<em>14 Solun str.</em>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
};

initMap().set(initMap);