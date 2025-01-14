import React from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helpers/helper";
import style from "./SideBar.module.css";
import { categories } from "../constants/list";

function SideBar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={style.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() == query.category 
              ? style.selected 
              : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
