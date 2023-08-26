import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <div className={styles.container}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <BurgerIngredients/>
      </div>
    </div>
  );
}

export default App;
