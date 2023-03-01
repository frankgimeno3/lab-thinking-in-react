import React from "react";

const ProductRow = ({ product }) => {
    const name = product.inStock ? (
        product.name
      ) : (
        <span className="out-of-stock">{product.name}</span>
      );
    
    return (
        <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;