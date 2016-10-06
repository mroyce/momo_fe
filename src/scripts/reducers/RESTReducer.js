import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';

import ActionTypes from '../constants/ActionTypes';
import ReducerBase from './ReducerBase';


class RESTReducer extends ReducerBase {
    constructor(url, ...args) {
        super(...args);

        this._url = url;
    }
    buildUrl(...queryArgs) {
        const queryParams = $.param(queryArgs);
        if (queryArgs.length) {
            return `${this._url}?${queryParams}`;
        }
        return this._url;
    }
    query(...queryArgs) {
        const url = this.buildUrl(queryArgs);
        return Q.Promise((resolve, reject) => $.ajax({
            url,
            dataType: 'json',
            type: 'GET',
            cache: false,
            success: response => {
                if (response.results) {
                    return resolve(response.results);
                }
                return resolve(response);
            },
        }).then(resources => {
            return resources;
        }));
    }
    create(data, ...queryArgs) {
        const url = this.buildUrl(queryArgs);
        return Q.Promise((resolve, reject) => $.ajax({
            url,
            data,
            dataType: 'json',
            type: 'POST',
            cache: false,
            success: response => {
                if (response.results) {
                    return resolve(response);
                }
                return resolve(response);
            },
        }).then(resource => {
            return resource;
        }));
    }
    update(...queryArgs) {
        const url = this.buildUrl(queryArgs);
    }
    destroy(...queryArgs) {
        const url = this.buildUrl(queryArgs);
    }
    get reducer() {
        return (state, action) => {
            switch (action.type) {
                case ActionTypes.REST_GET:
                    console.log(this.query());
                    break;
                case ActionTypes.REST_POST:
                    console.log(this.create());
                    break;
                case ActionTypes.REST_PUT:
                    console.log(this.update());
                    break;
                case ActionTypes.REST_DELETE:
                    console.log(this.destroy());
                    break;
                default:
                    // do nothing
            }
        };
    }
}


export default RESTReducer;
