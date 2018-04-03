import React from "react";

import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const EmptyComponent = () => <div />;

const closedModal = { isOpen: false, component: EmptyComponent };

const modalReducer = (state = closedModal, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        component: action.component,
        childProps: action.childProps
      };
    case CLOSE_MODAL:
      return Object.assign({}, state, { isOpen: false });
    default:
      return state;
  }
};

export default modalReducer;
