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
                long_description: 'The Metropolitan Museum of Art, colloquially \"the Met\", is located in New York City and is the largest art museum in the United States, and is among the most visited art museums in the world. Its permanent collection contains over two million works, divided among seventeen curatorial departments. The main building, on the eastern edge of Central Park along Manhattan\'s Museum Mile, is by area one of the world\'s largest art galleries. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from Medieval Europe.',
                thumbnail: "http://127.0.0.1:9000/media/test_DsMj4qA.png",
            },
        ];
    }
    render() {
      return (
        <div className="row">
          <section className="seven columns">
            <SearchList
              listings={this.listings}
            />
          </section>
          <section className="five columns">
            <SearchMap />
            <SearchFilter />
          </section>
        </div>
      );
    }
}


export default SearchView;
