import React from 'react';
import {Col, Pagination, Row, Space} from "antd";

function UsersPagination({currentPage, onPaginationChangeHandler, pagesCount}) {
    return (
        <Row align="middle" style={{marginTop: 25}}>
            <Col span={12} offset={6}>
                <Space>
                    <Pagination
                        showSizeChanger={false}
                        current={currentPage}
                        onChange={onPaginationChangeHandler}
                        total={pagesCount * 10}
                    />
                </Space>
            </Col>
        </Row>
    );
}

export default UsersPagination;