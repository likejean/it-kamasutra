const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const initialState = {
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Olesia'},
        {id: 3, name: 'Sofiya'},
        {id: 4, name: 'Aleks'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Roman'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your life going'},
        {id: 3, message: 'Great! Never been better!'},
        {id: 4, message: 'That\'s so cool!'},
        {id: 5, message: 'Really!?'},
        {id: 6, message: 'Of course!'}
    ],
    newMessageText: ""
};

const dialogsReducer = (state  = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};
        case UPDATE_MESSAGE:
            return {...state, newMessageText: action.payload};
        default:
            return state;
    }
}

//Actions
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageCreator = (payload) => ({type: UPDATE_MESSAGE, payload});

export default dialogsReducer;