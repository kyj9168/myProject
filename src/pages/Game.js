import React from "react";

const Game = (props) => {
    return (
        <div className={props.sidebar ? "game" : "game active"}>
            <iframe
                src="http://kyj9168.ddns.net:6104/"
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0px',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                }}
            />
        </div>
    );
};

export default Game;
