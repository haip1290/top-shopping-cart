import styles from "./InputQuantity.module.css";
const InputQuantity = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleOnChange = (event) => {
    setQuantity(+event.target.value || 1);
  };
  return (
    <div className={styles.quantityContainer}>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        value={quantity}
        id="quantity"
        min="1"
        onChange={(event) => handleOnChange(event)}
      />
      <div>
        <button type="button" className={styles.btn} onClick={handleIncrease}>
          +
        </button>
        <button type="button" className={styles.btn} onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
};

export default InputQuantity;
