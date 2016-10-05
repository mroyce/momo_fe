import React from 'react';


class SearchList extends React.Component {
    renderListing(listing) {
        return (
          <div className="listing">
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
                <span>Posted by {listing.author} on 6/20/1994</span>
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
          <h4>
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


export default SearchList;
