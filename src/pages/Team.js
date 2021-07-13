import React from "react";

const Team = (props) => {
    return (
        <div
            className="team"
            style={
                props.sidebar
                    ? {
                          width: "calc(100% - 60px)",
                      }
                    : {
                          width: "calc(100% - 175px)",
                      }
            }
        >
            <h1>Team</h1>
        </div>
    );
};

export default Team;
