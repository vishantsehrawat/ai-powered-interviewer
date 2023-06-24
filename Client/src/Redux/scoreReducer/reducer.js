import { POST_SCORE_FAILURE, POST_SCORE_LOADING, POST_SCORE_SUCCESS } from "./actionType"


const initialState = {
    scoreLoading: false,
    isError: false,
    score: 0
};




export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_SCORE_LOADING:
            return { ...state, scoreLoading: true }
        case POST_SCORE_SUCCESS:
            return { ...state, scoreLoading: false, score: payload }
        case POST_SCORE_FAILURE:
            return { ...state, scoreLoading: false, isError: true }
        default:
            return initialState;
    }


}



