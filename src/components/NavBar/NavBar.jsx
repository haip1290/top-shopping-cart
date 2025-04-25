import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ quantity }) => {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div className={styles.searchInput}>
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search eMart"
        />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({quantity})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
