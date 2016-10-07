import React from 'react';


class SearchHeader extends React.Component {
    render() {
        return (
          <header className="search-header">
            <div className="row">
              <div className="ten columns left">
              </div>
              <div className="one column right">
                <span>Sign Up</span>
              </div>
              <div className="one column right">
                <span>Log In</span>
              </div>              
            </div>
          </header>
        );
    }
}


export default SearchHeader;
