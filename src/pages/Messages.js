import React from "react";

const Messages = (props) => {
    return (
        <div
            className={props.sidebar ? "messages" : "messages active"}
        >
            <h1>Messages</h1>
        </div>
    );
};

export default Messages;
