
import styles from "./page.module.css";
import Mainmenu from "./components/MainMenu/Mainmenu";
import Cart from "./components/Cart/Cart";

export default function Home() {
  return (
    <div className={styles.page}>
      <Mainmenu />
      <Cart />
    </div>
  );
}
