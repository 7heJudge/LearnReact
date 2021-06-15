import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
    UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how r u?', likeCounts: 4},
        {id: 2, message: "It's my first post", likeCounts: 41},
    ],
    newPostText: 'clown',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};
export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatusSuccess = (status) => ({type: SET_USER_STATUS, status});
export const updateUserStatusSuccess = (status) => ({type: UPDATE_USER_STATUS, status});

export const setUserProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then(response => {
            dispatch(setUserProfileSuccess(response.data));
        });
    };
};


export const setUserStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(response => {
            dispatch(setUserStatusSuccess(response.data));
        });
    };
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if(response.data.resultCode === 0)
            dispatch(updateUserStatusSuccess(response.data));
        });
    };
};