import React, { Component } from 'react';
import { london, G_API } from './MapData';
import { mapDarkStyle } from './MapStyle';
import './mapstyle.css';

class MapPlaces extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${G_API}&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    // eslint-disable-next-line
    var map = new window.google.maps.Map(document.getElementById('map'), {
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
