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
import { ingredient } from "../../utils/data";
import { SET_CONSTRUCTOR_BUN, SET_CONSTRUCTOR_INGREDIENTS, addIngredients } from "../../services/actions/actions";

function App() {
  const dispatch = useDispatch()
  const ingredients = useSelector(state => 
    state.allIngredientsReducer.allIngredients)
    console.log(ingredients)
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const handleDrop = (item) => {
    if(item.type === ingredient.bun){
      dispatch({type: SET_CONSTRUCTOR_BUN, payload: item})
    } else {
      dispatch(addIngredients(item))
    }
    // item.type === ingredient.bun ? dispatch({type: SET_CONSTRUCTOR_BUN, payload: item}) : dispatch(addIngredients(item))
    // dispatch({type: ADD_CURRENT_ITEM, payload: item})
    // setConstructorIngred(item);
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
        <DndProvider backend={HTML5Backend}>
        <div>
          <h1 className="text text_type_main-large">Соберите бургер</h1>
          {contentBurgerIngredients}
        </div>
        <div className="pl-4 pr-4">
         {ingredients && <BurgerConstructor onDropHandler={handleDrop}/>}
          </div>
        </DndProvider>
        </div>

      </div>
  );
}

export default App;
