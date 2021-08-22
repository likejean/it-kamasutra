const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        {id: 1, message: 'Great! Samurai 2.0!', likes: 24},
        {id: 2, message: 'I love it!!!', likes: 45},
        {id: 3, message: 'This tutorial is awesome!', likes: 452}
    ],
    profile: null,
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
            return {...state, newPostText: '', posts: state.posts.concat(newPost)};

        case UPDATE_POST:
            return {...state, newPostText: action.payload};
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

//Actions
export const addPostCreator = () => ({type: ADD_POST});
export const updatePostCreator = (payload) => ({type: UPDATE_POST, payload});
export const setUserProfileCreator = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;