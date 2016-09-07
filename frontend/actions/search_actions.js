export const SearchConstants = {
   RECEIVE_SEARCH: "RECEIVE_SEARCH",
   REQUEST_SEARCH: "REQUEST_SEARCH"
 };

export const requestSearch = (data) => (
  {type: SearchConstants.REQUEST_SEARCH,
  data  
});

export const receiveSearch = (search) => ({
  type: SearchConstants.RECEIVE_SEARCH,
  search
});
