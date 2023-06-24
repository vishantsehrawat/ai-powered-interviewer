
import axios from 'axios';
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from './actionType';

const baseUrl = "https://aiinterviewer.onrender.com/user";


export const Login = (userDetails) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    // console.log(userDetails);
    return axios.post(`${baseUrl}/login`, userDetails)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err.response })
        })
};


export const Logout = () => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios
        .get(`${baseUrl}/logout`)
        .then((res) => {
            console.log(res);
            dispatch({ type: LOGOUT, payload: res });
        })
        .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err.response }));
};
