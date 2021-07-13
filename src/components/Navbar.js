import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    const refreshPage = () => window.location.reload();

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar"></div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <Link className="navbar-toggle" to="/">
                            <img
                                className="titleImg"
                                src={
                                    process.env.PUBLIC_URL + "images/title.png"
                                }
                            />
                            <span
                                className="titleSpan"
                                style={
                                    sidebar
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
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span
                                            className="menuSpan"
                                            style={
                                                sidebar
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

                        {sidebar ? (
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
}

export default Navbar;
