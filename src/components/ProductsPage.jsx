import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';

function ProductsPage () {
    const jsonData_mod = jsonData.map(item => {
        // let taskAux = {check: false, title: task.name, ...task};
        // delete taskAux.name;
        // return taskAux;
        return { check: false, ...item };
    })
    
    const [products, setProducts] = useState(jsonData_mod);
    const filterProducts = (text) => {
      setProducts(products.filter(product => product.name.toLowerCase().includes(text.toLowerCase())));
    }
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filter={filterProducts} />
        <ProductTable products={products} />
      </div>    
  )
}

export default ProductsPage;