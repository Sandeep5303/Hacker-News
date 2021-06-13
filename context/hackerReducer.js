import {
  ADD_SEARCH_RESULTS,
  ADD_CURRENT_NEWS,
  SET_SHOW_MODAL,
  SET_TERM,
  SET_LOADING,
} from '@context/index';

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
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
      };
    }
    case ADD_CURRENT_NEWS: {
      return {
        ...state,
        currentNews: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
