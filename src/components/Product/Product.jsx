import InputQuantity from "../InputQuantity/InputQuantity";
import styles from "./Product.module.css";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const setTotalQuantity = useOutletContext();
  const handleAddToCart = () => {
    setTotalQuantity((prev) => prev + quantity);
  };

  return (
    <div className={styles.product}>
      <div>
        <img src={product.image} alt="product image" />
      </div>
      <div>{product.title}</div>
      <div>${product.price}</div>
      <form>
        <InputQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className={styles.btn} type="button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </form>
    </div>
  );
};

export default Product;
