import styles from "./IngredientDetail.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientDetail = ({ingred, quantity}) => {


  return (
    <li className={styles.ingredient}>
       <div className={styles.imageWrapper}>
      <img alt={ingred?.name} src={ingred?.image} className={styles.icon}/>
      </div>
      <p className="text text_type_main-default">{ingred?.name}</p>
      <div className={styles.price}>
        <p className="text text_type_digits-default pr-2">{`${quantity} x ${ingred?.price}`}</p>
        <CurrencyIcon />
      </div>
    </li>
  );
};
