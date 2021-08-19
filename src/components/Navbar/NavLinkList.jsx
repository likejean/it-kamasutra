import React from "react";
import {
    CustomerServiceOutlined,
    GlobalOutlined,
    MessageOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
    UserOutlined
} from "@ant-design/icons";

const links = [
    {
        path: "/profile",
        tabName: "Profile",
        icon: <UserOutlined />
    },
    {
        path: "/dialogs",
        tabName: "Messages",
        icon: <MessageOutlined />
    },
    {
        path: "/news",
        tabName: "News",
        icon: <GlobalOutlined />
    },
    {
        path: "/music",
        tabName: "Music",
        icon: <CustomerServiceOutlined />
    },
    {
        path: "/settings",
        tabName: "Settings",
        icon: <SettingOutlined />
    },
    {
        path: "/users",
        tabName: "Users",
        icon: <UsergroupAddOutlined />

    }

];

export default links;