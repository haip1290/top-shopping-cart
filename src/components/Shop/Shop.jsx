import { Link } from "react-router-dom";
import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Link className={styles.btn} to="/cart">
        Check out
      </Link>
    </div>
  );
};

export default Shop;
