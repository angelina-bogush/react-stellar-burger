import styles from './burger-constructor.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from './burger-items/burger-items';
const BurgerConstructor = ({ingred}) => {
    return (
      <div className={`${styles.container} pl-4 pr-4`}>
        <BurgerItems data={ingred} topBunId="643d69a5c3f7b9001cfa093d" bottomBunId="643d69a5c3f7b9001cfa093c"/>
        <div className={styles.totalContainer}>
          <div className={styles.total}>
            <p className="text text_type_digits-medium pr-2">{ingred.reduce((p, v) => {
              return p + v.price},0)}</p>
            <CurrencyIcon />
          </div>
          <Button htmlType="button" type="primary" size="medium">
            Нажми на меня
          </Button>
        </div>
      </div>
    );
}
export default BurgerConstructor