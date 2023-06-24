
import { GET_QUESTION_REQUEST_SUCCESS, POST_ANSWER_REQUEST_SUCCESS, POST_REQUEST_PENDING, POST_REQUEST_FAILURE, POST_SCORE_SUCCESS } from "../interviewReducer/actionType"
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


// API for Submit Interview
export const generateInterviewScore = (payload) => (dispatch) => {

    dispatch({ type: POST_REQUEST_PENDING });
    axios.post("http://localhost:8080/compare", payload)
        .then(res => {
            console.log("COMPARE", res)
            const score = +res.data.response.match(/\d+$/)?.[0]
            // console.log("swati", score)
            // user id
            const scorePayload = {
                score,
                level: payload.user.level,
                course: payload.user.course
            }
            axios.post(`http://localhost:8080/score/addScore/${payload.user.uniqueUserId}`, scorePayload)
                .then(resp => {
                    console.log(resp)
                    console.log("SUCCESS")
                    dispatch({ type: POST_SCORE_SUCCESS, payload: score })
                }).catch(error => {
                    dispatch({ type: POST_REQUEST_FAILURE });
                })
        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
}



export const getMyscore = (payload) => (dispatch) => {
    axios.get("http://localhost:8080/compare", payload)
        .then(res => {
            const { response } = res

        })
        .catch((err) => {
            // console.log('API FAILURE', err);
            dispatch({ type: POST_REQUEST_FAILURE });
        });
}
