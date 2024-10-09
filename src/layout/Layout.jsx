import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
import style from "./Layout.module.css";
function Layout({ children }) {
  // const [state] = useCart();
  return (
    <>
      <header className={style.header}>
        <Link to="./products">YasinShop</Link>
        <Link to="./checkout">
          <div>
            {" "}
            <PiShoppingCartSimpleBold />
            {/* {!!state.itemsCounter && <span>{state.itemsCounter}</span>} */}
          </div>
        </Link>
      </header>
      {children}
      <footer className={style.footer}>
        <p>Developed By Yasin White ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
