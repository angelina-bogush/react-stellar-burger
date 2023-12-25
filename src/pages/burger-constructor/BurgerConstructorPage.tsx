import styles from "./Burger-constructor.module.css";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import {  useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "../../services/store/store.types";

export function BurgerConstructorPage() {
  const ingredients = useSelector(
    (state) => state.allIngredientsReducer.allIngredients
  );
  const contentBurgerIngredients = useMemo(() => {
    if (!ingredients) {
      return <div>Loading...</div>;
    } else {
      return <BurgerIngredients />;
    }
  }, [ingredients]);

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <div>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          {contentBurgerIngredients}
        </div>
        <div className="pl-4 pr-4">{ingredients && <BurgerConstructor />}</div>
      </DndProvider>
    </div>
  );
}
