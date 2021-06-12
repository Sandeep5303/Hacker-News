import React, { useReducer } from 'react';

import HackerContext from '@context/hackerContext';
import HackerReducer from '@context/hackerReducer';
import { SET_SHOW_MODAL } from '@context/index';

const HackerState = props => {
  const initialState = {
    showModal: false,
  };

  const [state, dispatch] = useReducer(HackerReducer, initialState);

  // toggle show modal
  const setShowModal = () => {
    dispatch({
      type: SET_SHOW_MODAL,
      payload: !state.showModal,
    });
  };

  return (
    <HackerContext.Provider
      value={{
        showModal: state.showModal,
        setShowModal,
      }}
    >
      {props.children}
    </HackerContext.Provider>
  );
};

export default HackerState;
