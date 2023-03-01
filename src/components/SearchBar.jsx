import { Divider, Input } from 'antd';
import { useState } from "react";

function SearchBar({filter, inStock, setInStock}) {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const inStockHandler = (e) => {
    setInStock(e.target.checked)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    filter(search, inStock);
    setSearch("");
  }

  return (
    <div>
      <Divider>Search</Divider>

      <form className="w-50 mx-auto mt-5 mb-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <Input value={search} onChange={searchHandler} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search for products" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={inStock} onChange={inStockHandler} />
          <label className="form-check-label" htmlFor="exampleCheck1">Only show products in stock</label>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;