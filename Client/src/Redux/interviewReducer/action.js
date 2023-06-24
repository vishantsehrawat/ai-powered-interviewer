
import { GET_QUESTION_REQUEST_SUCCESS, POST_ANSWER_REQUEST_SUCCESS, POST_REQUEST_PENDING, POST_REQUEST_FAILURE } from "../interviewReducer/actionType"
import axios from "axios";

const baseUrl = "http://localhost:8080/question";

export const getQuestion = (level, course) => (dispatch) => {
    dispatch({ type: POST_REQUEST_PENDING });
    const filter = {
        level, course
    }
    axios
        .get(`${baseUrl}/myQuestions?course=${course}&level=${level}`)
        .then((res) => {
            console.log('res-data', res.data);
            res.filter = filter;
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

export const generateInterviewScore = (payload) => (dispatch) => {
    axios.post("http://localhost:8080/compare", payload)
        .then(res => {
            console.log("COMPARE", res)
        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
}


export const getMyscore = (payload) => (dispatch) => {
    axios.get("http://localhost:8080/compare", payload)
        .then(res => {

        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
}
