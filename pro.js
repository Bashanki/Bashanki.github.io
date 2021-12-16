let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 48.46306856114664, lng: 35.048245711469136 },
            zoom: 14,
        });

        new google.maps.Marker({
            position: { lat: 48.46306856114664, lng: 35.048245711469136 },
            map,
            title: "Tech Shop",
        });
    }