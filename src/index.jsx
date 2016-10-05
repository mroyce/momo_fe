import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

import SearchView from 'components/SearchView';


require('lib/skeleton-less/less/skeleton.less');
require('styles/layout.less');


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router history={browserHistory}>
          <Route path="/" component={SearchView} />
        </Router>,
        document.getElementById('react-entry')
    );
});
