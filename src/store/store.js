import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import { calendarReducer } from '../reducers/calendarReducer';
import { modalReducer } from '../reducers/modalReducer';
import { authReducer } from '../reducers/authReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    modal: modalReducer,
    calendar: calendarReducer,
    auth: authReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);