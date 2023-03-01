import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, inStockOnly }) => {
  const rows = [];
  products.forEach((product) => {
    if (!inStockOnly || product.inStock) {
      rows.push(<ProductRow key={product.id} product={product} />);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;