const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
                {id: 2, message: 'I love it!!!', likes: 45},
                {id: 3, message: 'This tutorial is awesome!', likes: 452}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        }
    },
    _callSubscriber () {  //приватные методы
        console.log('State changed');
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        }else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: this._state.messagesPage.messages.length + 1,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = "";
            this._callSubscriber(this._state);

        }else if(action.type === UPDATE_POST){
            this._state.profilePage.newPostText = action.payload;
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_MESSAGE){
            this._state.messagesPage.newMessageText = action.payload;
            this._callSubscriber(this._state);
        }
    },

    subscribe (observer) {
        this._callSubscriber = observer;  //присваиваем необозначенной переменной кол-бек функцию для перерисовки Реакт-дерева
    }
}

//Actions
export const addPostCreator = () => ({type: ADD_POST});
export const updatePostCreator = (payload) => ({type: UPDATE_POST, payload});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageCreator = (payload) => ({type: UPDATE_MESSAGE, payload});


export default store;
window.store = store;