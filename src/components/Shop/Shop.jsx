import { Link } from "react-router-dom";
import styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

const Shop = () => {
  const { products, error, loading } = useProducts();

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Encounter Network Error: {error}</div>;

  return (
    <div className={styles.shop}>
      <div className={styles.items}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Link className={styles.checkout} to="/cart">
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Shop;
