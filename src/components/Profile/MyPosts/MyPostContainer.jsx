import {addPostCreator, updatePostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


//Контейнерная компонента

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
});

const mapDispatchToProps = (dispatch) => ({
    addPost: () => dispatch(addPostCreator()),
    updateNewPostText: (payload) => dispatch(updatePostCreator(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);