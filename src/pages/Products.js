import React from "react";

const Products = (props) => {
    return (
        <div className={props.sidebar ? "products" : "products active"}>
            <h1>Products</h1>
        </div>
    );
};

export default Products;
