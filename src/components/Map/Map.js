// import React, { Component } from 'react';
// import { G_API, london  } from './MapData';
// import { mapDarkStyle } from './MapStyle';
// class Map extends Component {
//   getGoogleMaps() {
//     if (!this.googleMapsPromise) {
//       this.googleMapsPromise = new Promise(resolve => {
//         // Add a global handler for when the API finishes loading
//         window.resolveGoogleMapsPromise = () => {
//           // Resolve the promise
//           resolve(window.google);

//           // Tidy up
//           delete window.resolveGoogleMapsPromise;
//         };

//         // Load the Google Maps API
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${G_API}&callback=resolveGoogleMapsPromise`;
//         script.async = true;
//         document.body.appendChild(script);
//       });
//     }

//     // Return a promise for the Google Maps API
//     return this.googleMapsPromise;
//   }

//   componentWillMount() {
//     // Start Google Maps API loading since we know we'll soon need it
//     this.getGoogleMaps();
//   }

//   componentDidMount() {
//     // Once the Google Maps API has finished loading, initialize the map
//     this.getGoogleMaps().then(google => {

//       const map = new google.maps.Map(document.getElementById('map'), {
//         center: london,
//         zoom: 13,
//         style: mapDarkStyle
//       });
//       const marker = new google.maps.Marker({
//         position: london,
//         map: map
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div id="map" style={{ width: 600, height: 300 }} />
//       </div>
//     );
//   }
// }

// export default Map;
