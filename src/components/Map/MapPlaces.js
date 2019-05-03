import React, { Component } from 'react';
import ListView from '../Places/ListView';
import axios from 'axios';

import { london, G_API, FS_ID, FS_SEC } from './MapData';
import { mapDarkStyle } from './MapStyle';
import './mapstyle.css';

class MapPlaces extends Component {
  state = {
    venues: []
  };
  componentDidMount() {
    this.getVenues();
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
      query: 'food',
      v: '20190428'
    };

    //axios get request
    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },

          this.loadMap()
        );
      })
      .catch(error => {
        console.log("Error get Foursquare API's Data" + error);
      });
  };

  initMap = () => {
    //create a map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: london,
      zoom: 10,
      style: mapDarkStyle
    });

    //Create infowindow
    let infowindow = new window.google.maps.InfoWindow();

    //Display Dynamic Markers
    this.state.venues.map(myVenue => {
      //infowindow content
      let contentString = `This is ${myVenue.venue.name}`;

      //create markers
      let marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      });

      //click on a marker
      marker.addListener('click', function() {
        //change content
        infowindow.setContent(contentString);

        //open infowindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div className="map-app">
          <ListView
            venues={this.state.venues}
            onDeleteVenues={this.removeVenue}
          />
        </div>
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
