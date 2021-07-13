import React from "react";

const Reports = (props) => {
    return (
        <div
            className="reports"
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
            <h1>Reports</h1>
        </div>
    );
};

export default Reports;
