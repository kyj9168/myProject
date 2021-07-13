import React from "react";

const Products = (props) => {
    return (
        <div
            className="products"
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
            <h1>Products</h1>
        </div>
    );
};

export default Products;
