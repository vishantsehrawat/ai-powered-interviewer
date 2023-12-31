import {

    combineReducers,
    applyMiddleware,
    legacy_createStore
} from 'redux';
import thunk from 'redux-thunk';

import { reducer as authReducer } from '../Redux/authReducer/reducer';
import { reducer as interviewReducer } from '../Redux/interviewReducer/reducer';
import { reducer as scoreReducer } from '../Redux/scoreReducer/reducer';


const rootReducer = combineReducers({
    scoreReducer,
    authReducer,
    interviewReducer
});

export const store = legacy_createStore(
    rootReducer,
    (applyMiddleware(thunk))
);
