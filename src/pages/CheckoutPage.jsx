import BasketCart from "../components/BasketCart";
import BasketSideBar from "../components/BasketSideBar";
// import { useCart } from "../context/CartContext";
import style from './CheckoutPage.module.css'
function CheckoutPage() {
  // const [state, dispatch] = useCart();
  // const clickHandler = (type, payload) => dispatch({ type, payload });
  // if (!state.itemsCounter) {
  //   return (
  //     <div className={style.container}>
  //       <h1>Empty</h1>
  //     </div>
  //   );
  // }
  return (
    <div className={style.container}>
      {/* <BasketSideBar state={state} clickHandler={clickHandler}/>
      <div className={style.products}> 
        {state.selectedItems.map((product) => (
          <BasketCart
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div> */}
    </div>
  );
}

export default CheckoutPage;
