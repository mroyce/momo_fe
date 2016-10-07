import React from 'react';
import { createStore } from 'redux';

import SearchHeader from 'components/SearchHeader';
import SearchList from 'components/SearchList';
import SearchMap from 'components/SearchMap';
import SearchFilter from 'components/SearchFilter';


class SearchView extends React.Component {
    get listings() {
        return [
            {
                id: 1,
                author: 1,
                name: 'Kanye West',
                short_description: 'Kanye West',
                long_description: 'Kanye West',
                created_at: '6/20/1994',
                thumbnail: 'http://127.0.0.1:9000/media/test_DsMj4qA.png', 
            },
            {
                id: 2,
                author: 2,
                name: 'Dean',
                short_description: 'Dean',
                long_description: 'Dean',
                created_at: '12/25/2015',
                thumbnail: 'http://127.0.0.1:9000/media/test_DsMj4qA.png',
            },
            {
                id: 3,
                author: 3,
                name: 'The Metropolitan Museum of Art',
                short_description: 'The Metropolitan Museum of Art',
                long_description: 'The Metropolitan Museum of Art, colloquially \"the Met\", is located in New York City and is the largest art museum in the United States, and is among the most visited art museums in the world. Its permanent collection contains over two million works, divided among seventeen curatorial departments. The main building, on the eastern edge of Central Park along Manhattan\'s Museum Mile, is by area one of the world\'s largest art galleries. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from Medieval Europe.',
                created_at: '10/5/2016',
                thumbnail: 'http://127.0.0.1:9000/media/test_DsMj4qA.png',
            },
            {
                id: 4,
                author: 4,
                name: 'Westfield San Francisco Centre',
                short_description: 'An upsacle, urban shopping mall located in San Francisco, California.',
                long_description: 'Originally developed by Sheldon Gordon (co-developer of The Forum Shops at Caesars and Beverly Center) the center opened in October 1991 as San Francisco Shopping Centre with approximately 500,000 square feet (46,000 m2) of space, the then-largest Nordstrom store (350,000 square feet) on the top several floors, the first spiral escalators in the United States, and connecting through to the adjoining Emporium-Capwell flagship store.\nAfter a slow start, it soon became one of the top performing shopping centers in the country. In 1996, the adjoining Emporium (it had dropped the Capwell name by then) was shuttered in the wake of Federated Department Stores\' buyout of its parent, Broadway Stores. The vacated store was temporarily used as a Macy\'s furniture store while it renovated its Union Square flagship in 1997.',
                created_at: '10/6/2016',
                thumbnail: 'http://127.0.0.1:9000/media/test_DsMj4qA.png',
            },
        ];
    }
    render() {
        return (
          <div className="row">
            <SearchHeader />
            <div className="search-view-content">
              <section className="seven columns">
                <SearchList
                  listings={this.listings}
                />
              </section>
              <section className="five columns">
                <SearchMap />
                <SearchFilter
                  listings={this.listings}
                />
              </section>
            </div>
          </div>
        );
    }
}


export default SearchView;
