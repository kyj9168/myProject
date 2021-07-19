import React from "react";

const Home = (props) => {
    return (
        <div className={props.sidebar ? "home" : "home active"}>
            {/* <span className="homeSpan">My Skill Tree</span>
            <WordCloud /> */}
               <iframe
                src="http://kyj9168.ddns.net:6102/"
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

export default Home;
