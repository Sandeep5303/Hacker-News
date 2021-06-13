import {
  ADD_SEARCH_RESULTS,
  ADD_CURRENT_NEWS,
  SET_SHOW_MODAL,
  SET_TERM,
  SET_LOADING,
  SET_SEARCH_LOADING,
  RESET_ARRAY,
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
    case SET_SEARCH_LOADING: {
      return {
        ...state,
        sloading: true,
      };
    }
    case ADD_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload,
        sloading: false,
      };
    }
    case ADD_CURRENT_NEWS: {
      return {
        ...state,
        currentNews: action.payload,
        loading: false,
      };
    }
    case RESET_ARRAY: {
      return {
        ...state,
        currentNews: null,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
