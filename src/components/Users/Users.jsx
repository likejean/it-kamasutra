import React from 'react';
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import {Badge, Card, Button, Space, Pagination, Col, Row, Divider} from 'antd';
import classes from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPaginationChangeHandler = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {

        const pagesCount = this.props.totalUsersCount % this.props.pageSize === 0
            ? this.props.totalUsersCount / this.props.pageSize
            : Math.floor(this.props.totalUsersCount / this.props.pageSize) + 1;

        return (
            <div>
                <Row align="middle" style={{marginTop: 25}}>
                    <Col span={12} offset={6}>
                        <Space>
                            <Pagination
                                showSizeChanger={false}
                                current={this.props.currentPage}
                                onChange={this.onPaginationChangeHandler}
                                total={pagesCount * 10}
                            />
                        </Space>
                    </Col>
                </Row>
                <Row><Divider orientation="center"><span style={{fontSize: 25}}>Users</span></Divider></Row>
                {
                    this.props.users.map((user, idx) => (<div className={classes.users} key={user.id}>
                        <Badge.Ribbon text={user.name}>
                            <Card className='ant-row-center' title={user.name} size="medium">
                                <Space size='large'>
                                    <div className='ant-col-5'>
                                        {user.photos.small === null
                                            ?
                                            <Badge size="default" count={idx + 1}><Avatar shape="square" size={125} style={{backgroundColor: '#87d068'}}
                                                    icon={<UserOutlined/>}/></Badge>
                                            :
                                            <Badge size="default" count={idx + 1}><Avatar shape="square" size={125} src={user.photos.small}/></Badge>
                                        }
                                    </div>
                                    <div className='ant-col'>
                                    </div>
                                    <div>
                                        {user.followed ?
                                            <Button onClick={() => this.props.unfollowUser(user.id)}>Follow</Button>
                                            :
                                            <Button onClick={() => this.props.followUser(user.id)}>Unfollow</Button>
                                        }
                                    </div>
                                </Space>
                            </Card>
                        </Badge.Ribbon>
                    </div>))
                }
            </div>
        )
    }
}

export default Users;