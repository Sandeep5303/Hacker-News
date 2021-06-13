import React, { useReducer } from 'react';

import { API_URL } from 'config/index';
import HackerContext from '@context/hackerContext';
import HackerReducer from '@context/hackerReducer';
import { SET_SHOW_MODAL, ADD_SEARCH_RESULTS, SET_TERM } from '@context/index';

const HackerState = props => {
  const initialState = {
    showModal: false,
    searchResults: [],
    term: '',
  };

  const [state, dispatch] = useReducer(HackerReducer, initialState);

  // toggle show modal
  const setShowModal = () => {
    dispatch({
      type: SET_SHOW_MODAL,
      payload: !state.showModal,
    });
  };

  // add search results
  const addSearchResults = async term => {
    const res = await fetch(`${API_URL}/search?query=${term}&tags=story`);
    const data = await res.json();
    dispatch({
      type: ADD_SEARCH_RESULTS,
      payload: data.hits,
    });
  };

  // set term
  const setTerm = text => {
    dispatch({
      type: SET_TERM,
      payload: text,
    });
  };

  return (
    <HackerContext.Provider
      value={{
        showModal: state.showModal,
        searchResults: state.searchResults,
        term: state.term,
        setShowModal,
        setTerm,
        addSearchResults,
      }}
    >
      {props.children}
    </HackerContext.Provider>
  );
};

export default HackerState;
