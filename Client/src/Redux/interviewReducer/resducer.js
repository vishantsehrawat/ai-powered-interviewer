import {
    DELETE_POST_REQUEST_SUCCESS,
    GET_POST_REQUEST_SUCCESS,
    PATCH_POST_REQUEST_SUCCESS,
    POST_POST_REQUEST_SUCCESS,
    POST_REQUEST_FAILURE,
    POST_REQUEST_PENDING,
} from "./actionTypes";

const initalState = {
    isLoadin: false,
    isError: false,
    question: [],

};

export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case POST_REQUEST_PENDING:
            return { ...state, isLoading: true };
        case GET_QUESTION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, posts: payload.data };
        case POST_ANSWER_REQUEST_SUCCESS:
            return { ...state, isLoading: false, posts: [...state.posts, payload] };
        case POST_REQUEST_FAILURE:
            return { ...state, isLoading: false, isError: true };


        default:
            return state;
    }
};
