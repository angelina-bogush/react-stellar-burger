import styles from './burger-constructor.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from './burger-items/burger-items';
import { data } from '../../utils/data.js'
const BurgerConstructor = () => {
    return (
      <div className={`${styles.container} pl-4 pr-4`}>
        <BurgerItems data={data} />
        <div className={styles.totalContainer}>
          <div className={styles.total}>
            <p className="text text_type_digits-medium pr-2">610</p>
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