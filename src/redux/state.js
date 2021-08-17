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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('State changed');
    },
    addPost () {
        let newPost = {
            id: this._state.profilePage.length + 1,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updatePost (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;  //присваиваем необозначенной переменной кол-бек функцию для перерисовки Реакт-дерева
    }
}

export default store;
window.store = store;