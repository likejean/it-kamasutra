import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {}
    },

    _callSubscriber () {  //приватные методы
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },

    subscribe (observer) {
        this._callSubscriber = observer;  //присваиваем необозначенной переменной кол-бек функцию для перерисовки Реакт-дерева
    }
}

window.store = store;

export default store;
