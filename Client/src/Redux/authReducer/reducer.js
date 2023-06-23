// import Cookies from 'js-cookie';

import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from './actionType';

// let token = Cookies.get('token');
// let userDetails = Cookies.get('userDetails');
// userDetails = userDetails ? JSON.parse(userDetails) : {};

const initialState = {
    isAuth: false,
    isError: false,
    isLoading: false,
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
                userDetails: payload.userDetails
            };
        }
        case LOGIN_FAILURE: {
            return { ...state, isError: true, isLoading: false, isAuth: false };
        }

        // case LOGOUT: {
        //     Cookies.remove('token');
        //     Cookies.remove('rToken');
        //     Cookies.remove('userDetails');
        //     return { ...state, isAuth: false };
        // }

        default:
            return state;
    }
};
