const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state;
    }
};
export default messagesReducer;
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});