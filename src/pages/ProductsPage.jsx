import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
// import { useProducts } from "../context/ProductContext";
import style from "./ProductsPage.module.css";

import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
//13
import { fetchProducts } from "../features/products/productSlice";
//14
import { useSelector, useDispatch } from "react-redux";

function ProductsPage() {
  // const products = useProducts();
  //15
  const dispatch = useDispatch();
  //17
  const { products,loading } = useSelector((store) => store.product);
  console.log(products);

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  //16
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    // console.log(finalProducts);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={style.container}>
        <div className={style.products}>
          {/* 17 */}
          {loading && <Loader />}
          {displayed.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
