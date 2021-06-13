import React, { useReducer } from 'react';

import { API_URL } from 'config/index';
import HackerContext from '@context/hackerContext';
import HackerReducer from '@context/hackerReducer';
import {
  ADD_SEARCH_RESULTS,
  ADD_CURRENT_NEWS,
  SET_SHOW_MODAL,
  SET_TERM,
  SET_LOADING,
} from '@context/index';

const HackerState = props => {
  const initialState = {
    showModal: false,
    currentNews: null,
    searchResults: [],
    term: '',
    loading: false,
  };

  const [state, dispatch] = useReducer(HackerReducer, initialState);

  // toggle show modal
  const setShowModal = () => {
    dispatch({
      type: SET_SHOW_MODAL,
      payload: !state.showModal,
    });
  };

  // add current news
  const addCurrentNews = async id => {
    setLoading();
    const res = await fetch(`${API_URL}/items/${id}`);
    const news = await res.json();
    dispatch({
      type: ADD_CURRENT_NEWS,
      payload: news,
    });
  };

  // add search results
  const addSearchResults = async term => {
    setLoading();
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

  // set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <HackerContext.Provider
      value={{
        showModal: state.showModal,
        searchResults: state.searchResults,
        currentNews: state.currentNews,
        term: state.term,
        loading: state.loading,
        setShowModal,
        setTerm,
        addSearchResults,
        addCurrentNews,
      }}
    >
      {props.children}
    </HackerContext.Provider>
  );
};

export default HackerState;
