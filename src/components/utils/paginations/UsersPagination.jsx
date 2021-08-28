import React from 'react';
import {Pagination, Space} from "antd";

function UsersPagination({currentPage, onPaginationChangeHandler, pagesCount}) {
    return (
        <Space>
            <Pagination
                showSizeChanger={false}
                current={currentPage}
                onChange={onPaginationChangeHandler}
                total={pagesCount * 10}
            />
        </Space>
    );
}

export default UsersPagination;