import React from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

const Navbar = (props) => {
    const showSidebar = () => props.setSidebar(!props.sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <div className="navbar"></div>
                <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <Link
                            className="navbar-toggle"
                            to="/"
                            onClick={() => props.setSelectMenu("/")}
                        >
                            <img
                                className="titleImg"
                                src={
                                    process.env.PUBLIC_URL + "images/title.png"
                                }
                            />
                            <span
                                className="titleSpan"
                                style={
                                    props.sidebar
                                        ? {
                                              display: "none",
                                          }
                                        : {
                                              display: "",
                                          }
                                }
                            >
                                /Project
                            </span>
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
                                            props.selectMenu == item.path
                                                ? "menuA active"
                                                : "menuA"
                                        }
                                    >
                                        {item.icon}
                                        <span
                                            className="menuSpan"
                                            style={
                                                props.sidebar
                                                    ? {
                                                          display: "none",
                                                      }
                                                    : {
                                                          display: "",
                                                      }
                                            }
                                        >
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}

                        {props.sidebar ? (
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiFillRightCircle
                                    onClick={showSidebar}
                                />
                            </Link>
                        ) : (
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiFillLeftCircle
                                    onClick={showSidebar}
                                />
                            </Link>
                        )}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
