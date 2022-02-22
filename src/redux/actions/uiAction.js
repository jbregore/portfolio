import * as actionTypes from "../types";

export const toggleTheme = (isDarkMode) => async (dispatch) => {
    try {
        localStorage.setItem("isDarkMode", isDarkMode);
        await dispatch({
            type: actionTypes.SET_THEME,
            payload: isDarkMode
        })
    } catch (err) {
        await dispatch({
            type: actionTypes.ON_ERROR,
            payload: err
        })
    }
};

export const getTheme = () => async (dispatch) => {
    try {
        const isDarkMode = localStorage.getItem("isDarkMode") === "true" ? true : false;
        await dispatch({
            type: actionTypes.SET_THEME,
            payload: isDarkMode
        })
    } catch (err) {
        await dispatch({
            type: actionTypes.ON_ERROR,
            payload: err
        })
    }
};







