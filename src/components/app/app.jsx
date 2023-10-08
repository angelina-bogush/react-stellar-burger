import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions/actions";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  ConstructorContext } from "../../services/ingredientsContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch()
  const ingredients = useSelector(state => 
    state.allIngredientsReducer.allIngredients)
  const [constructorIngred, setConstructorIngred] = useState({bun: null, ingredients: []})
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])
  const handleDrop = (item) => {
    item.type === ingredient.bun ? dispatch({type: SET_CONSTRUCTOR_BUN, payload: item}) : dispatch({type: SET_CONSTRUCTOR_INGREDIENTS, payload: item})
    dispatch({type: ADD_CURRENT_ITEM, payload: item})
    setConstructorIngred(item);
  }  

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
        <DndProvider backend={HTML5Backend}>
        <div>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          {contentBurgerIngredients}
        </div>
        <div className="pl-4 pr-4">
         {ingredients && <BurgerConstructor onDrop={(item) => handleDrop(item)}/>}
          </div>
        </DndProvider>
         </ConstructorContext.Provider>
        </div>

      </div>
  );
}

export default App;
