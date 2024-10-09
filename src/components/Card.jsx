import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helpers/helper";
import style from "./Card.module.css";
// import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";
function Card({ data }) {
  const { id, title, image, price } = data;
  //26
  const state = useSelector((store) => store.cart);

  //26
  const dispatch = useDispatch();
console.log(state);
  const quantity = productQuantity(state, id);

  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}</p>
      <div className={style.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>

        {quantity == 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        {!!quantity == 0 ? null : quantity}
        {quantity == 0 ? (
          <button onClick={() => dispatch(addItem(data))}>
            <TbShoppingBagCheck />
          </button>
        ) : (
          <button onClick={() =>dispatch(increase(data)) }>+</button>
        )}
      </div>
    </div>
  );
}

export default Card;
