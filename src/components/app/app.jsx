import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getData } from "../../utils/api";
import { useEffect, useState } from "react";
import { IngredientsContext } from "../../services/ingredientsContext";

function App() {
  const [ingredients, setIngredients] = useState([])
  useEffect(() => {
    getData()
    .then(data => {
      setIngredients(data)})
    .catch(err => console.log(err))
  }, [])
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <IngredientsContext.Provider value={{ingredients, setIngredients}}>
        <div>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          {ingredients.length > 0 &&  <BurgerIngredients/>}
        </div>
        <div className="pl-4 pr-4">
         {ingredients.length > 0 && <BurgerConstructor/>}
          </div>
         </IngredientsContext.Provider>
        </div>

      </div>
  );
}

export default App;
