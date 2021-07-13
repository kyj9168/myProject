import React from "react";

const Support = (props) => {
    return (
        <div
            className="support"
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
            <h1>Support</h1>
        </div>
    );
};

export default Support;
