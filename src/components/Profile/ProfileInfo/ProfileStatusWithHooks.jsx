import React, {useState, useEffect} from 'react';
import classes from './ProfileInfo.module.css';
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;


const ProfileStatusWithHooks = (props) =>  {

    const {isStatusFetching, updateUserStatus, status} = props;

    const [editMode, setEditMode] = useState(false);
    const [newStatus, setNewStatus] = useState(status);

    useEffect(() => setNewStatus(status), [status]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserStatus(newStatus);
    }

    const onStatusChange = (e) => setNewStatus(e.currentTarget.value);

    return (
        <div className={classes.status}>
            {!editMode ?
                <div>
                    {isStatusFetching ? <Spin indicator={antIcon} /> : <span onDoubleClick={activateEditMode}>{status || "------"}</span>}
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={newStatus}/>
                </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;