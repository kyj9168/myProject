import React from "react";

const Reports = (props) => {
    return (
        <div className={props.sidebar ? "reports" : "reports active"}>
            <h1>Reports</h1>
        </div>
    );
};

export default Reports;
