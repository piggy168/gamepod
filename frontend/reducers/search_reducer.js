import { SearchConstants } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
    switch(action.type){
      case SearchConstants.RECEIVE_SEARCH:
        return action.search;
      default:
        return state;
    }
  };

  export default SearchReducer;
