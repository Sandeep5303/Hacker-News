import { ADD_SEARCH_RESULTS, SET_SHOW_MODAL, SET_TERM } from '@context/index';

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    case SET_TERM: {
      return {
        ...state,
        term: action.payload,
      };
    }
    case ADD_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
