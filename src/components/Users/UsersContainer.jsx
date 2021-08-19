import {connect} from "react-redux";
import Users from "./Users";
import {followUserCreator, setUsersCreator, unfollowUserCreator} from "../../redux/usersReducers";


//Контейнерная компонента

const mapStateToProps = (state) => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch) => ({
    followUser: (userId) => dispatch(followUserCreator(userId)),
    unfollowUser: (userId) => dispatch(unfollowUserCreator(userId)),
    setUsers: (users) => dispatch(setUsersCreator(users))
});


export default connect(mapStateToProps, mapDispatchToProps)(Users);