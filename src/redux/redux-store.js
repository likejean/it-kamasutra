import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducers from "./usersReducers";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import thunk from "redux-thunk";
import initReducer from "./initReducer";

const SET_USER_AUTH = "SET_USER_AUTH";
const SEND_MESSAGE = "SEND_MESSAGE";
const ADD_POST = "ADD_POST";

//Combine reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: initReducer,
    form: formReducer.plugin({
        message: (state, action) => {
            switch (action.type) {
                case SEND_MESSAGE:
                    return undefined;
                default:
                    return state;
            }
        },
        post: (state, action) => {
            switch (action.type) {
                case ADD_POST:
                    return undefined;
                default:
                    return state;
            }
        },
        login: (state, action) => {
            switch (action.type) {
                case SET_USER_AUTH:
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

//Assign reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;