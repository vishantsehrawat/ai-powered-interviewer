
import axios from 'axios';
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from './actionType';

export const Login = (userDetails) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        // console.log(userDetails);
        return axios.post(``, userDetails).then(
            (res) => dispatch({ type: LOGIN_SUCCESS, payload: res }),
            (err) => dispatch({ type: LOGIN_FAILURE, payload: err.response })
        );
    };
};

export const Logout = () => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios
        .get(``)
        .then((res) => {
            console.log(res);
            dispatch({ type: LOGOUT, payload: res });
        })
        .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err.response }));
};
