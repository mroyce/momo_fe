import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import SearchView from 'components/SearchView';

import SearchFilterReducer from 'reducers/SearchFilterReducer';


require('lib/skeleton-less/less/skeleton.less');
require('styles/layout.less');


document.addEventListener('DOMContentLoaded', () => {
    // Combine reducers and add `routerReducer`
    const reducer = combineReducers({
        SearchFilterReducer,
        routing: routerReducer,
    });

    // Add the reducer to your store on the `routing` key
    const store = createStore(
        combineReducers({
            SearchFilterReducer,
            routing: routerReducer,
        })
    );

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(browserHistory, store);


    ReactDOM.render(
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={SearchView} />
          </Router>
        </Provider>,
        document.getElementById('react-entry')
    );
});
