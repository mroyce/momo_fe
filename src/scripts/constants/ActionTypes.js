import _ from 'lodash';

const mirrorKeys = keys => _.zipObject(keys, keys);

export default {
    USER: {
        GET: 'USER_GET',
        POST: 'USER_POST',
        PUT: 'USER_PUT',
        DELETE: 'USER_DELETE',
    },

    COMPANY: {
        GET: 'COMPANY_GET',
        POST: 'COMPANY_POST',
        PUT: 'COMPANY_PUT',
        DELETE: 'COMPANY_DLETE',
    },

    EVENT: {
        GET: 'EVENT_GET',
        POST: 'EVENT_POST',
        PUT: 'EVENT_PUT',
        DELETE: 'EVENT_DELETE',
    },

    LISTING: {
        GET: 'LISTING_GET',
        POST: 'LISTING_POST',
        PUT: 'LISTING_PUT',
        DELETE: 'LISTING_DELETE',
    },

    SEARCH_FILTER: mirrorKeys([
        'ADD_SEARCH_FILTER',
    ]),
}
