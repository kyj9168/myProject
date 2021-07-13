import React from "react";

const Messages = (props) => {
    return (
        <div
            className="messages"
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
            <h1>Messages</h1>
        </div>
    );
};

export default Messages;
