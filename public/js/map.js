mapboxgl.accessToken = mapToken;

// const coordinates = [77.209, 28.6139]; // Ensure coordinates are defined


const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // [longitude, latitude]
  style: "mapbox://styles/mapbox/streets-v12",
  zoom: 8, // starting zoom
});

 const marker1 = new mapboxgl.Marker({ color: "red" })
   .setLngLat(listing.geometry.coordinates)
   .setPopup(
     new mapboxgl.Popup({ offset: 25 }).setHTML(
       `<h4>${listing.location}</h4><p>Exact Location will be after booking</p>`
     )
   )
   .addTo(map);