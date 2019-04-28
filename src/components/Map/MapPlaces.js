import React, { Component } from 'react';

import axios from 'axios';

import { london, G_API, FS_ID, FS_SEC } from './MapData';
import { mapDarkStyle } from './MapStyle';
import './mapstyle.css';

class MapPlaces extends Component {
  componentDidMount() {
    this.getVenues();
    this.loadMap();
  }

  loadMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${G_API}&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  //Foursquer API
  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: FS_ID,
      client_secret: FS_SEC,
      near: 'london',
      v: '20190428'
    };

    //axios get request
    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response.data.response.groups[0].items);
      })
      .catch(error => {
        console.log("Error get Foursquare API's Data" + error);
      });
  };

  initMap = () => {
    // eslint-disable-next-line
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: london,
      zoom: 10,
      style: mapDarkStyle
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

//

/*  
    loadScript function to create this script: 
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&      callback=initMap" async defer></script>
*/

function loadScript(url) {
  let index = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default MapPlaces;
