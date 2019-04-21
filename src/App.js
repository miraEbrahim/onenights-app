import React, { Component } from 'react';
import ListPlaces from './ListPlaces';
import './index.css';

class App extends Component {
  state = {
    places: [
      {
        id: '4c7cc27e3e90a1cdfb5243be',
        name: 'Cafe Milano',
        type: 'Cafe',
        latitude: 51.46099454945425,
        longitude: -0.21752025208051115,
        placeStreetAddress: '204 Upper Richmond Rd',
        placeCity: 'London ',
        placeZipCode: 'SW15 6TD',
        mapDirection:
          "<a href='https://goo.gl/maps/RfogWdvZ89K2'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/jHmUDqUb6U92'></a>",
        extraInfo: ''
      },
      {
        id: '4c78016e97028cfa4e4dd6fe',
        name: 'Cafe Nunu',
        type: 'Cafe',
        latitude: 51.46791804300835,
        longitude: -0.20908542453073797,
        placeStreetAddress: '6A Ranelagh Gardens',
        placeCity: 'London ',
        placeZipCode: 'SW6 3UB',
        mapDirection:
          "<a href='https://goo.gl/maps/RdeLb7nT2K22'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/qvkq4qBN5tn'></a>",
        extraInfo: ''
      },
      {
        id: '4b9fe98af964a520d54937e3',
        name: 'Cafe Nero',
        type: 'Cafe',
        latitude: 51.459819,
        longitude: -0.211806,
        placeStreetAddress: '112 Upper Richmond Rd',
        placeCity: 'London ',
        placeZipCode: 'SW15 2SP',
        mapDirection:
          "<a href='https://goo.gl/maps/KcLqQqLvxh52'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/WkqxF1wFLev'></a>",
        extraInfo: ''
      },
      {
        id: '559b959f498e191eb0698efa',
        name: 'Costa Coffee',
        type: 'Cafe',
        latitude: 51.465003,
        longitude: -0.214407,
        placeStreetAddress: '26 Putney High St',
        placeCity: 'London ',
        placeZipCode: 'SW15 1SN',
        mapDirection:
          "<a href='https://goo.gl/maps/vazMns9n5DP2'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/rzBvABMoi4A2'></a>",
        extraInfo: ''
      },
      {
        id: '4ebf15afd5fb50d70f350c59',
        name: 'Artisan Coffee',
        type: 'Cafe',
        latitude: 51.461226,
        longitude: -0.219454,
        placeStreetAddress: '203 Upper Richmond Rd',
        placeCity: 'London ',
        placeZipCode: 'SW15 6SG',
        mapDirection:
          "<a href='https://goo.gl/maps/U44bLMrbN9w'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/j2JVhZKQz9n'></a>",
        extraInfo: ''
      },
      {
        id: '4fd09d28e4b0da17b03a3264',
        name: 'Cafe Parisienne',
        type: 'Cafe',
        latitude: 51.461578711507386,
        longitude: -0.22001220017854142,
        placeStreetAddress: '225 Lavender Hill',
        placeCity: 'London ',
        placeZipCode: 'SW11 1JR',
        mapDirection:
          "<a href='https://goo.gl/maps/x3L46FgDAC92'>Get Directions</a>",
        URL: `https://goo.gl/maps/jHmUDqUb6U92`,
        extraInfo: ''
      },
      {
        id: '4b546704f964a520f8b927e3',
        name: 'Ground Coffee Society',
        type: 'Cafe',
        latitude: 51.467227,
        longitude: -0.219392,
        placeStreetAddress: '79 Lower Richmond Rd',
        placeCity: 'London ',
        placeZipCode: 'SW15 1ET',
        mapDirection:
          "<a href='https://goo.gl/maps/wfSwoMqmZ4F2'>Get Directions</a>",
        URL: 'https://goo.gl/maps/1RfcDSRoiw82',
        extraInfo: ''
      }
    ]
  };
  render() {
    return (
      <div>
        <ListPlaces places={this.state.places} />
      </div>
    );
  }
}

export default App;
