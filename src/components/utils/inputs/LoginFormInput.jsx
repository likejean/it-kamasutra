import React, { Component } from 'react';
import {Checkbox, Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


export class LoginUserNameFormInput extends Component {
    render() {
        const {input: {value, onChange}} = this.props;
        return (
            <div>
                <Input
                    placeholder="input username"
                    size='large'
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export class LoginUserPasswordFormInput extends Component {
    render() {
        const {input: {value, onChange}} = this.props;
        return (
            <div>
                <Input.Password
                    placeholder="input password"
                    value={value}
                    size='large'
                    onChange={onChange}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </div>
        )
    }
}

export class LoginUserCheckboxFormInput extends Component {
    render() {
        const {input: {onChange}} = this.props;
        return (
            <div>
                <Checkbox onChange={onChange}>
                    Remember Me
                </Checkbox>
            </div>
        )
    }
}


