import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <div>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          <BurgerIngredients />
        </div>
        <div className="pl-4 pr-4">
          <BurgerConstructor />
          </div>
        </div>
      </div>
  );
}

export default App;
