import React from 'react';
import {Col, List} from "antd";

const ContactListComponent = ({aboutMe, contacts}) => {
    return (
        <Col flex="auto">
            <div style={{marginTop: 25, marginBottom: 25}}><b>About Me:</b><span>{aboutMe}</span></div>
            <List
                size="small"
                header={<div><b>Contacts</b></div>}
                bordered
                dataSource={Object.values(contacts).filter(contact => contact !== null && contact)}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Col>
    );
}

export default ContactListComponent;