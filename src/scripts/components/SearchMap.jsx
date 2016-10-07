import React from 'react';


class SearchMap extends React.Component {
    locationFilterContent() {
        return (
          <div className="search-map-location">
             <input type='text' placeholder='Search by city' />
          </div>
        );
    }
    render() {
        return (
          <div className="search-map">
            {this.locationFilterContent}
            <img src="http://www.brandeis.edu/about/images/newformat/map2.jpg" alt="Google Map" />
          </div>
        );
    }
}


export default SearchMap;
