import React from "react";

const Chat = (props) => {
    return (
        <div className={props.sidebar ? "chat" : "chat active"}>
            <iframe
                src="http://kyj9168.ddns.net:6101/"
                style={{ width: "100%", height: "100%" ,border:"0px"}}
            />
        </div>
    );
};

export default Chat;
