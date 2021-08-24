import React from 'react';
import classes from './ProfileInfo.module.css';
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    render() {
        const {  isStatusFetching } = this.props;
        return (
            <div className={classes.status}>
                {!this.state.editMode ?
                    <div>
                        {isStatusFetching ? <Spin indicator={antIcon} /> : <span onClick={this.activateEditMode}>{this.props.status || "------"}</span>}
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;