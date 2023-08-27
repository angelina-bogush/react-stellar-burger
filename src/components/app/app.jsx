import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

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
          <div className={styles.totalContainer}>
            <div className={styles.total}>
            <p className="text text_type_digits-medium pr-2">610</p>
            <CurrencyIcon />
            </div>
            <Button htmlType="button" type="primary" size="medium">
              Нажми на меня
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
