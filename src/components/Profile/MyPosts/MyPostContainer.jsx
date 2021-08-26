import {addPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";


//Контейнерная компонента

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
});


export default compose(
    connect(mapStateToProps,
        {
            addPost: addPostCreator
        }
    ))(MyPosts);