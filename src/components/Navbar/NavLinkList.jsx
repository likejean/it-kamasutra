import React from "react";
import {
    CustomerServiceOutlined,
    GlobalOutlined, LoginOutlined,
    MessageOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
    UserOutlined
} from "@ant-design/icons";

const links = [
    {
        id: 0,
        path: "/profile",
        tabName: "Profile",
        icon: <UserOutlined />
    },
    {
        id: 1,
        path: "/dialogs",
        tabName: "Messages",
        icon: <MessageOutlined />
    },
    {
        id: 2,
        path: "/news",
        tabName: "News",
        icon: <GlobalOutlined />
    },
    {
        id: 3,
        path: "/music",
        tabName: "Music",
        icon: <CustomerServiceOutlined />
    },
    {
        id: 4,
        path: "/settings",
        tabName: "Settings",
        icon: <SettingOutlined />
    },
    {
        id: 5,
        path: "/users",
        tabName: "Users",
        icon: <UsergroupAddOutlined />
    },
    {
        id: 6,
        path: "/login",
        tabName: "Login",
        icon: <LoginOutlined />
    }
];

export default links;