import styles from "./Home.module.css";
import heroImage from "/src/assets/images/online-shopping.webp";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div>
          <h1>eMart</h1>
          <p>This is the home page of an eCommerce website</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum
            alias debitis accusantium cum magnam corporis impedit aliquam
            mollitia deserunt similique adipisci aut repellat, deleniti
            reiciendis numquam excepturi porro! Reprehenderit.
          </p>
        </div>
        <div>
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
