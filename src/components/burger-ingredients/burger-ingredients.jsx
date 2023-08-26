import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerTab from './burger-tab/burger-tab';
import BurgerCard from './burger-card/burger-card';

function BurgerIngredients() {
  return (
    <div className={`${styles.container} pt-5`}>
      <BurgerTab />

      <div className={styles.ingredientsContainer}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <div className={styles.ingredientsLayout}>
            <BurgerCard/>
            
        </div>
      </div>
    </div>
  );
}
export default BurgerIngredients