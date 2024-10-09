import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useProductsDetails } from "../context/ProductContext";
import Loader from "../components/Loader";
import style from "./DetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { useEffect } from "react";
function DetailsPage() {
  const { id } = useParams();
  //20
  const dispatch = useDispatch();
  //19
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //18
  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id == +id)
  );
  if (!productDetails) return <Loader />;
  return (
    <div className={style.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={style.information}>
        <h3 className={style.title}>{productDetails.title}</h3>
        <p className={style.description}>{productDetails.description}</p>
        <p className={style.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={style.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
