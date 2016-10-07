import React from 'react';
import { connect } from 'react-redux';

import DateRangePickerWrapper from 'components/DateRangePickerWrapper';


const handleSelect = e => {
    return {
        type: 'ADD_SEARCH_FILTER',
        field: 'name',
        value: e.target.value
    }
}

class SearchFilter extends React.Component {
    get dateFilterContent() {
        return (
            <div className="search-filter-date twelve columns">
              <DateRangePickerWrapper />
            </div>
        );
    }
    get nameFilterContent() {
        const options = this.props.listings.map(listing =>
            [listing.id, listing.name]
        );

        return (
            <div>
              <select onChange={handleSelect} defaultValue="empty">
                <option disabled value="empty">Choose a Name</option>
                {options.map(option =>
                  <option value={option[0]} key={option[1]}>{option[1]}</option>
                )}
              </select>
            </div>
        );
    }
    render() {
        return (
          <div className="search-filter">
            {this.nameFilterContent}
            <span> YO YO YO </span>
          </div>
        );
    }
}


export default connect(
    state => ({ searchFilters: state.searchFilters }),
    { handleSelect }
)(SearchFilter);
