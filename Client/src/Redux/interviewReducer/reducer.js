import {
    DELETE_POST_REQUEST_SUCCESS,
    GET_POST_REQUEST_SUCCESS,
    PATCH_POST_REQUEST_SUCCESS,
    POST_POST_REQUEST_SUCCESS,
    POST_REQUEST_FAILURE,
    POST_REQUEST_PENDING,
    GET_QUESTION_REQUEST_SUCCESS
} from "./actionType";

const initalState = {
    isLoading: false,
    isError: false,
    questionSet: [],

};

export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case POST_REQUEST_PENDING:
            return { ...state, isLoading: true };
        case GET_QUESTION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, questionSet: payload.data.data };
        // case POST_ANSWER_REQUEST_SUCCESS:
        //     return { ...state, isLoading: false, questions: [...state.questions, payload.data] };
        case POST_REQUEST_FAILURE:
            return { ...state, isLoading: false, isError: true };


        default:
            return state;
    }
};
