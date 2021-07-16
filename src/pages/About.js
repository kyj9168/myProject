import React from "react";

const About = (props) => {
    return (
        <div className={props.sidebar ? "about" : "about active"}>
            <iframe
                src="http://192.168.1.146:6102/"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "0px",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                }}
            />
        </div>
    );
};

export default About;
