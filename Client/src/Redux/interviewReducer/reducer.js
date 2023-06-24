import {
    DELETE_POST_REQUEST_SUCCESS,
    GET_POST_REQUEST_SUCCESS,
    PATCH_POST_REQUEST_SUCCESS,
    POST_POST_REQUEST_SUCCESS,
    POST_REQUEST_FAILURE,
    POST_REQUEST_PENDING,
    GET_QUESTION_REQUEST_SUCCESS,
    POST_SCORE_LOADING,
    POST_SCORE_SUCCESS,
    POST_SCORE_FAILURE
} from "./actionType";

const initalState = {
    isLoading: false,
    isError: false,
    questionSet: [],
    filter: {},
    score: null
};

export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case POST_REQUEST_PENDING:
            return { ...state, isLoading: true, filter: {} };
        case GET_QUESTION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, questionSet: payload.data.data, filter: payload.filter, score: null };
        case POST_SCORE_SUCCESS:
            return { ...state, isLoading: false, questionSet: [], filter: {}, score: payload };
        case POST_REQUEST_FAILURE:
            return { ...state, isLoading: false, isError: true, filter: {}, score: null };
        default:
            return state;
    }
};
