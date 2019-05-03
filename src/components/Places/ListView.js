import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListView extends Component {
  static propTypes = {
    venues: PropTypes.array.isRequired,
    onDeleteVenues: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };
  render() {
    const { venues, onDeleteVenues } = this.props;
    const { query } = this.state;

    let showingVenues;
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingVenues = venues.filter(venue => match.test(venue.name));
    } else {
      showingVenues = venues;
    }
    console.log(showingVenues);
    showingVenues.sort(sortBy('name'));
    return (
      <div className="list-venues">
        {/* {JSON.stringify(this.state)} to view the searched query on UI*/}
        <div className="list-venues-top">
          <input
            className="search-venues"
            type="text"
            placeholder="search venues"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />

          <Link to="/create" className="add-venue">
            Add Venue
          </Link>
        </div>

        {showingVenues.length !== venues.length && (
          <div className="showing-venues">
            <span>
              Now Showing {showingVenues.length} of {venues.length} total
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ol className="venue-list">
          {showingVenues.map(venue => (
            <li key={venue.id} className="venue-list-item">
              <div className="venue-details">
                <p> {venue.name}</p>
                <p>{venue.categories}</p>
                <p>{venue.location}</p>
              </div>
              <button
                onClick={() => onDeleteVenues(venue)}
                className="venue-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ListView.propTypes = {
  venues: PropTypes.array.isRequired,
  onDeleteVenues: PropTypes.func.isRequired
};
export default ListView;
