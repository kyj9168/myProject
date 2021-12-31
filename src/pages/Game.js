import React from "react";

const Game = (props) => {
    return (
        <div className={props.sidebar ? "game" : "game active"}>
            <h1>Coming Soon 🤪</h1>
        </div>
    );
};

export default Game;
