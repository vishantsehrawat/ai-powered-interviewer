// import Cookies from 'js-cookie';

import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from './actionType';

const initialState = {
    isAuth: false,
    isError: false,
    isLoading: false,
    userDetails: {},
    token: ""

};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoading: true };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                userDetails: payload
            };
        }
        case LOGIN_FAILURE: {
            return { ...state, isError: true, isLoading: false, isAuth: false };
        }

        case LOGOUT: {
            localStorage.removeItem("token");
            return { ...state, isAuth: false };
        }

        default:
            return state;
    }
};
