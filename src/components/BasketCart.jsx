import React from "react";
import style from "./BasketCart.module.css";
import { shortenText } from "../helpers/helper";
import { MdDeleteOutline } from "react-icons/md";
function BasketCart({ data, clickHandler }) {
  const { image, quantity, title } = data;
  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={style.actions}>
        {quantity == 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCart;
