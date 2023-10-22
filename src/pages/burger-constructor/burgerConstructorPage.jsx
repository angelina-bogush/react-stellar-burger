import styles from "./burger-constructor.module.css";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions/ingredients";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function BurgerConstructorPage() {
  const dispatch = useDispatch();
  const ingredients = useSelector(
    (state) => state.allIngredientsReducer.allIngredients
  );
 
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const contentBurgerIngredients = useMemo(() => {
    if (!ingredients) {
      return <div>Loading...</div>;
    } else {
      return <BurgerIngredients />;
    }
  }, [ingredients]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <div>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            {contentBurgerIngredients}
          </div>
          <div className="pl-4 pr-4">
            {ingredients && <BurgerConstructor />}
          </div>
        </DndProvider>
      </div>
    </div>
  );
}

