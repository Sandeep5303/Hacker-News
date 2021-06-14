import React, { useReducer } from 'react';

import { API_URL } from 'config/index';
import { customToast } from 'config/helper';
import HackerContext from '@context/hackerContext';
import HackerReducer from '@context/hackerReducer';
import {
  ADD_SEARCH_RESULTS,
  ADD_CURRENT_NEWS,
  SET_SHOW_MODAL,
  SET_TERM,
  SET_LOADING,
  SET_SEARCH_LOADING,
  RESET_ARRAY,
} from '@context/index';

const HackerState = props => {
  const initialState = {
    showModal: false,
    currentNews: null,
    searchResults: [],
    term: '',
    loading: false,
    sLoading: false,
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
    try {
      resetCurrent();
      setLoading();
      const res = await fetch(`${API_URL}/items/${id}`);
      const news = await res.json();
      // customToast('success', 'Story successfully loaded');

      const filter = {
        id: news.id,
        created_at: news.created_at,
        type: news.type,
        author: news.author,
        title: news.title,
        url: news.url,
        text: news.text,
        points: news.points,
        children: [...news.children.slice(0, 20)],
      };
      dispatch({
        type: ADD_CURRENT_NEWS,
        payload: filter,
      });
    } catch (err) {
      customToast('error', `${err}`);
    }
  };

  // add search results
  const addSearchResults = async term => {
    try {
      setSearchLoading();
      const res = await fetch(`${API_URL}/search?query=${term}&tags=story`);
      const data = await res.json();
      dispatch({
        type: ADD_SEARCH_RESULTS,
        payload: data.hits,
      });
    } catch (err) {
      customToast('error', `${err}`);
    }
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

  // set search loading
  const setSearchLoading = () => {
    dispatch({
      type: SET_SEARCH_LOADING,
    });
  };

  // reset current array to null
  const resetCurrent = () => {
    dispatch({
      type: RESET_ARRAY,
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
        sloading: state.sloading,
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
