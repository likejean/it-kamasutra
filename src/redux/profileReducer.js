const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

const initialState = {
    posts: [
        {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
        {id: 2, message: 'I love it!!!', likes: 45},
        {id: 3, message: 'This tutorial is awesome!', likes: 452}
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_POST:
            state.newPostText = action.payload;
            return state;

        default: return state;
    }
}

//Actions
export const addPostCreator = () => ({type: ADD_POST});
export const updatePostCreator = (payload) => ({type: UPDATE_POST, payload});

export default profileReducer;