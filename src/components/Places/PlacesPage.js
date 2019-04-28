import React, { Component } from 'react';
import ListPlaces from './ListPlaces';
import { places } from './PlacesData';

class PlacesPage extends Component {
  state = {
    places: places
  };
  render() {
    return (
      <div>
        <div>
          <input id="show-places" type="button" value="Show" />
          <input id="hide-places" type="button" value="Hide" />
        </div>
        <ListPlaces places={this.state.places} />
      </div>
    );
  }
}

export default PlacesPage;
