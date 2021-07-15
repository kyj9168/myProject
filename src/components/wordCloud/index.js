import React from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./words";

const callbacks = {
    // getWordColor: (word) => (word.value > 50 ? "blue" : "red"),
    // onWordClick: console.log,
    // onWordMouseOver: console.log,
    getWordTooltip: (word) =>
        `${word.text} [${
            word.value == 300
                ? "Excellent😎"
                : word.value == 200
                ? "Good😊"
                : word.value == 100
                ? "well😋"
                : ""
        }]`,
};
const options = {
    colors: [
        "#a9f1df",
        "#ffbbbb",
        "#d8b5ff",
        "#1eae98",
        "#bff098",
        "#6fd6ff",
        "#c6ea8d",
        "#fe90af",
        "#f1eab9",
        "#ff8c8c",
        "#ea8d8d",
        "#a890fe",
        "#00b7ff",
        "#ffffc7",
        "#fca5f1",
        "#b5ffff",
        "#d74177",
        "#ffe98a",
        "#38adae",
        "#cd295a",
    ],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [60, 75],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1500,
};
// const size = [300, 300];

const wordCloud = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "calc(100% - 80px)",
                    position: "absolute",
                    bottom: 0,
                }}
            >
                <ReactWordcloud
                    callbacks={callbacks}
                    options={options}
                    // size={size}
                    words={words}
                />
            </div>
        </>
    );
};

export default wordCloud;
