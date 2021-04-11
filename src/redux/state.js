import {observe} from "web-vitals/dist/modules/lib/observe";

let rerenderEntireTree = () => {
    console.log('State is...');
};

export let store = {
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
    addPost() {
        let newPost = {
            id: 5,
            message: this.profilePage.newPostText,
            likeCounts: 0
        };
        this.profilePage.posts.push(newPost);
        this.profilePage.newPostText = '';
        rerenderEntireTree(this);
    },
    updateNewPostText(newText) {
        this.profilePage.newPostText = newText;
        rerenderEntireTree(this);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this.messagesPage.newMessageText
        };
        this.messagesPage.messages.push(newMessage);
        this.messagesPage.newMessageText = '';
        rerenderEntireTree(this);
    },
    updateNewMessageText(newMessage) {
        this.messagesPage.newMessageText = newMessage;
        rerenderEntireTree(this);
    }
};

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likeCounts: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// };
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };
//
// export const addMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: state.messagesPage.newMessageText
//     };
//     state.messagesPage.messages.push(newMessage);
//     state.messagesPage.newMessageText = '';
//     rerenderEntireTree(state);
// };
//
// export const updateNewMessageText = (newMessage) => {
//     state.messagesPage.newMessageText = newMessage;
//     rerenderEntireTree(state);
// };

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};