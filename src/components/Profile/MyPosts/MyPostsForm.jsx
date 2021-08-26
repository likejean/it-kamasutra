import React from 'react';
import {Button, Space} from "antd";
import {Field} from "redux-form";
import {PostFormTextarea} from "../../utils/inputs/ReduxFormInputs";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const maxLength = maxLengthCreator(30);
const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Space direction='vertical'>
                <div>
                    <Field validate={[requiredField, maxLength]} id="newPostBody" name={"newPostBody"} component={PostFormTextarea} />
                </div>
                <div>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Space>
        </form>
    );
}

export default MyPostsForm;


