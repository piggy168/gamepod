import { SearchConstants } from '../actions/search_actions';
import { fetchSearch } from '../util/search_api_util';
import { receiveSearch } from '../actions/search_actions';



const SearchMiddleware = ({getState, dispatch}) => next => action => {
    switch(action.type){
      case SearchConstants.REQUEST_SEARCH:
        const success = search => dispatch(receiveSearch(search));
        fetchSearch(success,action.data);
        return next(action);
      default:
        return next(action);
    }
  };

export default SearchMiddleware;
