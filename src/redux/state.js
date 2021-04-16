import {observe} from "web-vitals/dist/modules/lib/observe";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
};
