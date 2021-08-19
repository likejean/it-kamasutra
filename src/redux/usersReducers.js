const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: "",
            followed: false,
            fullName: 'Dmitry',
            status: 'boss',
            location: {city: "Minsk", country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: "",
            followed: false,
            fullName: 'Sasha',
            status: 'boss',
            location: {city: "Kiyev", country: 'Ukraine'}
        },
        {
            id: 3,
            photoUrl: "",
            followed: true,
            fullName: 'Andrew',
            status: 'boss',
            location: {city: "Moscow", country: 'Russia'}
        },
        {
            id: 4,
            photoUrl: "",
            followed: false,
            fullName: 'John',
            status: 'guest',
            location: {city: "Seattle", country: 'United States'}
        }
    ]
};


const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state, users:
                    [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

//Actions
export const followUserCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowUserCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users})

export default userReducer;