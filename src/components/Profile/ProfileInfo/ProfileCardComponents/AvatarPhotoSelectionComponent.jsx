import React from 'react';
import {Button, Col, Space} from "antd";

const AvatarPhotoSelectionComponent = ({isOwner, onMainPhotoSelected}) => {
    return (
        <Col>
            <Space direction='vertical'>{isOwner && <Button><input type='file' onChange={onMainPhotoSelected}/></Button>}</Space>
        </Col>
    );
}

export default AvatarPhotoSelectionComponent;