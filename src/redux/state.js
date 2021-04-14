import {observe} from "web-vitals/dist/modules/lib/observe";

let ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let store = {
    _state: {
        friendsPage: {
            friends: [
                {
                    id: 1,
                    name: 'Yan-kaban',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbpenKx7Fa9h5m9Doq3d--5GLMLyiv4uYWQ&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Dima-kaban',
                    image: 'https://lh3.googleusercontent.com/proxy/5RqOjZYxBW2FlgMDIpBzybRF4q4rgRC1H4Lk4nl0vKSFxg28gvVzc1AOG-j5TO6PpmLrFsjhvyI2WHQe7pTXtpcEOYpLppgkamOiI18Pz43tBIRZwp8bzG0'
                },
                {
                    id: 3,
                    name: 'Misha-kaban',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNJk0ax-_XRwNM-e84VHSVo_Z1oAdXGWOfQ&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'Kura-kaban',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbpenKx7Fa9h5m9Doq3d--5GLMLyiv4uYWQ&usqp=CAU'
                }
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how r u?', likeCounts: 4},
                {id: 2, message: "It's my first post", likeCounts: 41},
            ],
            newPostText: 'clown'
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hey!'},
                {id: 2, message: 'Yooooo!'},
                {id: 3, message: 'Whaaats up?!'}
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Yan-kaban',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbpenKx7Fa9h5m9Doq3d--5GLMLyiv4uYWQ&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Dima-kaban',
                    image: 'https://lh3.googleusercontent.com/proxy/5RqOjZYxBW2FlgMDIpBzybRF4q4rgRC1H4Lk4nl0vKSFxg28gvVzc1AOG-j5TO6PpmLrFsjhvyI2WHQe7pTXtpcEOYpLppgkamOiI18Pz43tBIRZwp8bzG0'
                },
                {
                    id: 3,
                    name: 'Misha-kaban',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNJk0ax-_XRwNM-e84VHSVo_Z1oAdXGWOfQ&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'Kura-kaban',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbpenKx7Fa9h5m9Doq3d--5GLMLyiv4uYWQ&usqp=CAU'
                }
            ],
            newMessageText: 'clown'
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is...');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounts: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });
