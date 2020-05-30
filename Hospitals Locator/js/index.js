var map;
var markers = [];
function initMap() 
{
    var morar = 
    {
        lat: 26.222705,
        lng: 78.234605
    },
        
    map = new google.maps.Map(document.getElementById('map'), 
    {
    center: morar,
    zoom: 15,    
    }); 

    // var marker = new google.maps.Marker({
    //     icon: {
    //         path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    //         strokeColor: "green",
    //         scale: 3
    //     },
    //     map: map,
    //     title: "Home",
    //     position: morar
    // });

    displayStores()
    showStoresMarkers()

    // stores.forEach(function(store)
    //   {
    //       var lat = store.coordinates.latitude;
    //       var lng = store.coordinates.longitude;
    //       var address = store.addressLines[0];
    //       var name = store.name;
    //       var latlng = {lat,lng};

    //       var marker = new google.maps.Marker({
    //           map: map,
    //           title: 'Hospital',
    //           position: latlng
    //       });
    //   })
}

function displayStores(){
    var storeHtml = "";
    stores.forEach(function(store, index)
    {
        var address = store.addressLines;
        var phone = store.phoneNumber;
        storeHtml += `<div class="store-container">    
        <div class="store-info-container">
            <div class="store-address">
            <span> ${address[0]}</span>
            <span>${address[1]}</span>
            </div>
            <div class="store-phone">${phone}</div>
        </div>
        <div class="store-container-number">
            <div class="store-number">${index+1}</div>
        </div>
    </div>`
    });
    document.querySelector('.stores-list').innerHTML = storeHtml;
}

function showStoresMarkers() {
    stores.forEach(function(store, index){
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude);
        var name = store.name;
        var address = store.addressLines[0];
        createMarker(latlng, name, address);
    })
}


function createMarker(latlng, name, address) {
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
    });
    // google.maps.event.addListener(marker, 'click', function() {
    //   infoWindow.setContent(html);
    //   infoWindow.open(map, marker);
    // });
    markers.push(marker);
}