import * as actionTypes from "../types";

const initialState = {
  isDarkMode: false,
  lang: "en",
  error: null,
};

function controlsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_THEME: {
      return {
        ...state,
        isDarkMode: action.payload,
        error: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

export default controlsReducer;
