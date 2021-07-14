import React from "react";

const Chat = (props) => {
    return (
        <div className={props.sidebar ? "chat" : "chat active"}>
            <iframe
                src="http://192.168.1.146:6101/"
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

export default Chat;
