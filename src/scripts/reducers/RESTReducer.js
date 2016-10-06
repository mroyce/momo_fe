import Q from 'q';
import $ from 'jquery';
import _ from 'lodash';
import invariant from 'invariant';

import ActionTypes from 'constants/ActionTypes';
import Api from 'constants/Api';

import ReducerBase from 'reducers/ReducerBase';


class RESTReducer extends ReducerBase {
    constructor(name, endpoint, actions, ...args) {
        super(...args);

        this._name = name;
        this._endpoint = endpoint;
        this._actions = actions;
    }
    get url() {
        invariant(
            this._endpoint,
            '%s must specify this._endpoint.',
            this._name,
        );
        return `${Api.url}${this._endpoint}`;
    }
    buildUrl(...queryArgs) {
        const queryParams = $.param(queryArgs);
        if (queryArgs.length) {
            return `${this.url}?${queryParams}`;
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
    update(data, ...queryArgs) {
        const url = this.buildUrl(queryArgs);
    }
    destroy(...queryArgs) {
        const url = this.buildUrl(queryArgs);
    }
    get initialState() {
        return {
            asdf: {}
        };
    }
    get reducer() {
        return (state = this.initialState, action) => {
            switch (action.type) {
                case this._actions.GET:
                    this.query().then(resources => {
                        return _.assign({}, state, { asdf: resources });
                    });
                    break;
                case this._actions.POST:
                    this.create().then(resource => {
                        return _.assign({}, state, { asdf: resource });
                    });
                    break;
                case this._actions.PUT:
                    this.update();
                    break;
                case this._actions.DELETE:
                    this.destroy();
                    break;
                default:
                    return state;
            }
        };
    }
}


export default RESTReducer;
