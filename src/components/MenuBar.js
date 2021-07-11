import React from "react";
import { Link } from "react-router";
import "./MenuBar.css";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import PostLinks from "./PostLinks";
const MenuItem = ({ active, children, to }) => (
    <Link to={to} className={`menu-item ${active ? "active" : ""}`}>
        {children}
    </Link>
);
const goHome = () => (window.location.href = "/");

const MenuBar = (props, context) => {
    const { router } = context;
    return (
        <div className="menuBar">
            <div className="logo" onClick={goHome}>
                Y/project
            </div>
            <div className="menu" >
                <MenuItem to={"/"} active={router.isActive("/", true)}>
                    이력서
                </MenuItem>
                <MenuItem to={"/about"} active={router.isActive("/about")}>
                    게시판
                </MenuItem>
                <MenuItem to={"/post"} active={router.isActive("/post")}>
                    test
                </MenuItem>
                {router.isActive("/post") ? <PostLinks /> : null}


                <AiFillLeftCircle size="30" />
                <AiFillRightCircle size="30" />
            </div>
        </div>
    );
};

MenuBar.contextTypes = {
    router: React.PropTypes.object,
};

export default MenuBar;
