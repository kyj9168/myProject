import React from "react";

const Team = (props) => {
    return (
        <div className={props.sidebar ? "team" : "team active"}>
            <h1>Team</h1>
        </div>
    );
};

export default Team;
