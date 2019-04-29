// import React, { Component } from 'react';

// import {  G_API } from './MapData';
// import { mapDarkStyle } from './MapStyle';
// import './mapstyle.css';

// class GoogleMap extends Component {
//     state = {
//         places: []
//     };

//     componentDidMount() {
//         this.loadMap();
//     }

//     loadMap = () => {
//         loadScript(`https://maps.googleapis.com/maps/api/js?key=${G_API}&libraries=places&callback=initMap`);
//         window.initMap = this.initMap;
//     }

//     initMap = () => {
//         //create a map
//         let london = new google.maps.LatLng( 51.5074, 0.1278 );

//         //create infowindow
//         let infowindow = new window.google.maps.InfoWindow();

//         const map = new window.google.maps.Map(document.getElementById('map'), {
//           center: london,
//           zoom: 10,
//           style: mapDarkStyle
//         });

//         const placeService = new window.google.maps.places.PlacesService(map)

//         const request = {
//             query: 'london',
//             fields: ['place_id', 'name', 'formatted_address', 'icon', 'geometry'],
//         }

//         placeService.findPlaceFromQuery(request, (results, status) => {
//         if (status == window.google.maps.places.PlacesServiceStatus.OK) {

//             results.forEach((item) => {
//             console.log(item)
//             // place_id, name, formatted_address, geometry.location, icon
//             });

//     };

//         render() {
//                 return (
//                   <main>
//                     <div id="map" />
//                   </main>
//                 );
//               }

// function loadScript(url) {
//     let index = window.document.getElementsByTagName('script')[0];
//     let script = window.document.createElement('script');
//     script.src = url;
//     script.async = true;
//     script.defer = true;
//     index.parentNode.insertBefore(script, index);
//   }

// export default GoogleMap;
