const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case UPDATE_MESSAGE:
            state.newMessageText = action.payload;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        default:
            return state;
    }
}

//Actions
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageCreator = (payload) => ({type: UPDATE_MESSAGE, payload});

export default dialogsReducer;