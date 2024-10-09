import style from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <div className={style.loader}>
      <RotatingLines
      width="100px"
      height="100px"
      strokeColor="rgb(23, 104, 202)"
      strokeWidth="3"
      />
    </div>
  );
}

export default Loader;
