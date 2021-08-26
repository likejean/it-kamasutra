import React, {Component} from 'react';
import {Checkbox, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

const {TextArea} = Input;

export class LoginEmailFormInput extends Component {
    render() {
        const {input, meta: {visited, error}} = this.props;
        return (
            <div>
                <Input
                    {...input}
                    placeholder="input your email"
                    size='large'
                    bordered={!(visited && error)}
                    style={{width: 350, borderRadius: visited && error && '3px', border: visited && error && '4px solid red' }}
                />
                {visited && error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        )
    }
}

export class LoginUserPasswordFormInput extends Component {
    render() {
        const {input, meta: {visited, error}} = this.props;
        return (
            <div>
                <Input.Password
                    {...input}
                    placeholder="input password"
                    size='large'
                    bordered={!(visited && error)}
                    style={{width: 350, borderRadius: visited && error && '3px', border: visited && error && '4px solid red' }}
                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
                {visited && error && <p style={{color: 'red'}}>{error}</p>}
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

export class DialogsFormTextarea extends Component {
    render() {
        const {input, meta: {visited, error}} = this.props;
        return (
            <>
                <TextArea
                    {...input}
                    placeholder="enter your new message"
                    bordered={!(visited && error)}
                    style={{border: visited && error && '4px solid red' }}
                    showCount maxLength={1000}
                />
                {visited && error && <p style={{color: 'red'}}>{error}</p>}
            </>
        )
    }
}

export class PostFormTextarea extends Component {

    render() {
        const {input, meta: {error, visited}} = this.props;
        return (
            <>
                <TextArea
                    {...input}
                    bordered={!(visited && error)}
                    style={{border: visited && error && '4px solid red' }}
                    placeholder="enter your new post"
                    showCount maxLength={1000}
                />
                {visited && error && <p style={{color: 'red'}}>{error}</p>}
            </>
        )
    }
}






