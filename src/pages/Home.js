import React from "react";
import WordCloud from "../components/wordCloud";

const Home = (props) => {
    return (
        <div className={props.sidebar ? "home" : "home active"}>
            <span className="homeSpan">My Skill Tree</span>
            <WordCloud />
        </div>
    );
};

export default Home;
