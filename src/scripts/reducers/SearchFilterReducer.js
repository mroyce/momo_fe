import ActionTypes from 'constants/ActionTypes';
import ReducerBase from 'reducers/ReducerBase';


class SearchFilterReducer extends ReducerBase {
    get initialState() {
        return {
            searchFilters: {},
        }
    }
    get reducer() {
        return (state = this.initialState, action) => {
            switch (action.type) {
                case ActionTypes.SEARCH_FILTER.ADD_SEARCH_FILTER:
                    const searchFilters = state.searchFilters;
                    searchFilters[action.field] = action.value;
                    return _.assign({}, state, { searchFilters });
                    break;
                default:
                    return state;
            }
        }
    }
}


const reducer = new SearchFilterReducer();


export default reducer.reducer;
