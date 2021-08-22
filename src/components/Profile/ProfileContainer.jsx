import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId;
        if(this.props.match.params.userId) userId = this.props.match.params.userId;
        else userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default withRouter(connect(mapStateToProps, {setUserProfile: setUserProfileCreator})(ProfileContainer));