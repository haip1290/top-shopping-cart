import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={product.image} alt="product image" />
      </div>
      <div>{product.title}</div>
      <div>${product.price}</div>
    </div>
  );
};

export default Product;
