import { SET_SHOW_MODAL } from '@context/index';

export default (state, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    default:
      return state;
  }
};
