function SeachCity() {
    let xhr = new XMLHttpRequest();
    let city = document.getElementById('search-city').value;
    xhr.open("GET", `//api.openweathermap.org/data/2.5/weather?q=${city},in&appid=c9eac82f671439a9269d8824959db78f`, true);
    xhr.send()
    let forecast = new XMLHttpRequest();
    forecast.open("GET", `//api.openweathermap.org/data/2.5/forecast?q=${city},in&appid=c9eac82f671439a9269d8824959db78f`, true);
    forecast.send()
    xhr.onload = function () {
        if(xhr.status === 200){
            let res = JSON.parse(xhr.responseText);
            console.log(res);
            // document.getElementById('description-image').classList.remove('d-none');
            // document.getElementById('city').innerHTML = res.name
            // document.getElementById('temperature').innerHTML = (res.main.temp - 273.15).toFixed(2) + "&deg;C";
            // document.getElementById('description-span').innerHTML = res.weather[0].main + " , " + res.weather[0].description
            // document.getElementById('description-image').src = "//openweathermap.org/img/w/" + res.weather[0].icon + ".png"
            // `document.getElementById('wind-speed').innerHTML = "Wind Speed : " + res.wind.speed
        }
        else{
            alert("Please Enter a valid City Name");
        }
    }
}

function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
  
    let markers = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }