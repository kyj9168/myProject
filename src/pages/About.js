import React from "react";
import WordCloud from "../components/wordCloud";

const About = (props) => {
    return (
        <div className={props.sidebar ? "about" : "about active"}>
           <span className="homeSpan">My Skill Tree</span>
            <WordCloud />
        </div>
    );
};

export default About;
