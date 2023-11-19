import styles from "./IngredientDetail.module.css";
import { IngredIcon } from "../../../feed/ingredIcon/IngredIcon";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientDetail = () => {
  return (
    <li className={styles.ingredient}>
      <IngredIcon />
      <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
      <div className={styles.price}>
        <p className="text text_type_digits-default pr-2">2 x 20</p>
        <CurrencyIcon />
      </div>
    </li>
  );
};
