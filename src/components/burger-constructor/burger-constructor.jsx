import styles from './burger-constructor.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from './burger-items/burger-items';
import { data } from '../../utils/data.js'
const BurgerConstructor = () => {
    return (
      <div className={`${styles.container} pl-4 pr-4`}>
        <BurgerItems data={data} topBunId="60666c42cc7b410027a1a9b1" bottomBunId="60666c42cc7b410027a1a9b2"/>
        <div className={styles.totalContainer}>
          <div className={styles.total}>
            <p className="text text_type_digits-medium pr-2">{data.reduce((p, v) => {
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