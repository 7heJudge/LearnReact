import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    messagesReducer: messagesReducer,
    friendsReducer: friendsReducer
});

export let store = createStore(reducers);