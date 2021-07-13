import React from "react";

const Home = (props) => {
    return (
        <div
            className="home"
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
            <h1>Home</h1>
        </div>
    );
};

export default Home;
