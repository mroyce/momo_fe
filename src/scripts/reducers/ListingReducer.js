import ActionTypes from 'constants/ActionTypes';
import Api from 'constants/Api';
import RESTReducer from 'reducers/RESTReducer';


class ListingReducer extends RESTReducer {}


const reducer = new ListingReducer('listings', Api.endpoints.LISTINGS, ActionTypes.LISTING);


export default reducer.reducer;
