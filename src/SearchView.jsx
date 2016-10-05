import React from 'react';

import SearchList from './SearchList';
import SearchMap from './SearchMap';
import SearchFilter from './SearchFilter';


class SearchView extends React.Component {
    get listings() {
        return [
            {
                id: 1,
                author: 1,
                name: 'Kanye West',
                short_description: 'Kanye West',
                long_description: 'Kanye West',
                thumbnail: "http://127.0.0.1:9000/media/test_DsMj4qA.png", 
            },
            {
                id: 2,
                author: 2,
                name: 'Dean',
                short_description: 'Dean',
                long_description: 'Dean',
                thumbnail: "http://127.0.0.1:9000/media/test_DsMj4qA.png",
            },
            {
                id: 3,
                author: 3,
                name: 'The Metropolitan Museum of Art',
                short_description: 'The Metropolitan Museum of Art',
                long_description: 'The Metropolitan Museum of Art',
                thumbnail: "http://127.0.0.1:9000/media/test_DsMj4qA.png",
            },
        ];
    }
    render() {
      return (
        <div className="row">
          <div className="seven columns">
            <SearchList
              listings={this.listings}
            />
          </div>
          <div className="five columns">
            <SearchMap />
            <SearchFilter />
          </div>
        </div>
      );
    }
}


export default SearchView;
