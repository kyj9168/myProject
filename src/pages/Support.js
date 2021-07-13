import React from "react";

const Support = (props) => {
    return (
        <div className={props.sidebar ? "support" : "support active"}>
            <h1>Support</h1>
        </div>
    );
};

export default Support;
