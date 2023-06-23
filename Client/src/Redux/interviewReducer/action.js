
import { GET_QUESTION_REQUEST_SUCCESS, POST_ANSWER_REQUEST_SUCCESS, POST_REQUEST_PENDING, POST_REQUEST_FAILURE } from "../interviewReducer/actionType"



export const getQuestion = (obj) => (dispatch) => {
    dispatch({ type: POST_REQUEST_PENDING });

    axios
        .get(`/questions/?${obj}`)
        .then((res) => {
            // console.log('res-data', res.data);
            dispatch({ type: GET_QUESTION_REQUEST_SUCCESS, payload: res });
        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
};


export const postQuestion = (obj) => (dispatch) => {
    dispatch({ type: POST_REQUEST_PENDING });

    axios
        .post(`/questions/?${obj}`)
        .then((res) => {
            // console.log('res-data', res.data);
            dispatch({ type: GET_QUESTION_REQUEST_SUCCESS, payload: res });
        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
};
