import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div>
        <Link to="cart">Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;
