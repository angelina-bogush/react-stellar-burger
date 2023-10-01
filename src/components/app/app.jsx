import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
// import { getData } from "../../utils/api";
import { getIngredients } from "../../services/actions/allIngredients";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  ConstructorContext } from "../../services/ingredientsContext";

function App() {
  const dispatch = useDispatch()
  const ingredients = useSelector(state => 
    state.allIngredients)
  console.log(ingredients)
  const [constructorIngred, setConstructorIngred] = useState({bun: null, ingredients: []})

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const contentBurgerIngredients = useMemo(() => {
    if(!ingredients){
      return <div>Loading...</div>
    } else {
      return <BurgerIngredients/>
    }
  },[])
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
      <ConstructorContext.Provider value={{constructorIngred, setConstructorIngred}}>
        {/* <IngredientsContext.Provider value={{ingredients, setIngredients}}> */}
        <div>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          {contentBurgerIngredients}
          {/* {ingredients.length > 0 &&  <BurgerIngredients/>} */}
        </div>
        {/* </IngredientsContext.Provider> */}
        <div className="pl-4 pr-4">
         {/* {ingredients.length > 0 && <BurgerConstructor/>} */}
          </div>
         </ConstructorContext.Provider>
        </div>

      </div>
  );
}

export default App;
