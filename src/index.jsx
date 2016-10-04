import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route IndexRedirect, IndexRoute, browserHistory } from 'react-router';


$(document).ready(() => {
    ReactDOM.render(
        <Router history={browserHistory}>
        </Router>,
        document.body
    );
});
