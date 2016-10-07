import React from 'react';
import { connect } from 'react-redux';


class SearchList extends React.Component {
    renderListing(listing) {
        return (
          <div className="listing" key={listing.id}>
            <div className="listing-thumbnail-container">
              <img
                src={listing.thumbnail}
                alt={listing.name}
                className="listing-thumbnail"
              />
            </div>
            <div className="listing-text-container">
              <div className="listing-name">
                <span>{listing.name}</span>
              </div>
              <div className="listing-short-description">
                <span>{listing.short_description}</span>
              </div>
              <div className="listing-author-date">
                <span>Posted by {listing.author} on {listing.created_at}</span>
              </div>
              <div className="listing-long-description">
                <span>{listing.long_description}</span>
              </div>
            </div>
          </div>
        );
    }
    get title() {
        return (
          <h4 className="search-list-title">
            There are <b>{this.props.listings.length}</b> events around you!
          </h4>
        );
    }
    get list() {
        return this.props.listings.map((listing) =>
            this.renderListing(listing)
        );
    }
    render() {
        console.log(this.state);
        return (
          <div className="search-list">
            {this.title}
            {this.list}
          </div>
        );
    }
}


SearchList.propTypes = {
    listings: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}


export default connect(
    state => ({ searchFilters: state.searchFilters })
)(SearchList);
