import React from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";
import { IconContext } from "react-icons";

const Navbar = (props) => {
    const showSidebar = () => {
        props.setSidebar(!props.sidebar);
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar"></div>
                <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <Link
                            className="navbar-toggle"
                            to="/"
                            onClick={() => props.setSelectMenu("/")}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL + "images/title.png"
                                }
                                style={
                                    props.sidebar
                                        ? { width: "50px", opacity: 1 }
                                        : { width: 0 }
                                }
                                className="titleImg"
                                alt="main"
                            />

                            <img
                                src={
                                    process.env.PUBLIC_URL + "images/title2.png"
                                }
                                style={
                                    props.sidebar
                                        ? { width: 0 }
                                        : { width: "150px", opacity: 1 }
                                }
                                className="titleImg2"
                                alt="main"
                            />
                        </Link>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link
                                        to={item.path}
                                        onClick={() =>
                                            props.setSelectMenu(item.path)
                                        }
                                        className={
                                            props.selectMenu === item.path
                                                ? "menuA active"
                                                : "menuA"
                                        }
                                    >
                                        {item.icon}
                                        <span
                                            className={
                                                props.sidebar
                                                    ? "menuSpan displayNone"
                                                    : "menuSpan"
                                            }
                                        >
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}

                        <div className="menu-bars">
                            {props.sidebar ? (
                                <AiIcons.AiFillRightCircle
                                    onClick={showSidebar}
                                />
                            ) : (
                                <AiIcons.AiFillLeftCircle
                                    onClick={showSidebar}
                                />
                            )}
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
