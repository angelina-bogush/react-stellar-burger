import { TotalCount } from '../../burger-constructor/totalCount/TotalCount';
import styles from './OrderInfo.module.css'
import { IngredientDetail } from './ingredient-detail/IngredientDetail'

export const OrderInfo = ({modal}) => {

    return (
      <div className={styles.container}>
        <p className={`text text_type_digits-default ${modal ? styles.orderModal : styles.order}`}>#536453</p>
        <p className="text text_type_main-medium pb-2">
          Black Hole Singularity острый бургер
        </p>
        <p className={`text text_type_main-default ${styles.blue}`}>Выполнен</p>
        <div className={styles.components}>
          <p className="text text_type_main-medium">Состав:</p>
          <ul className={`${styles.list} custom-scroll`}>
            <IngredientDetail />
            <IngredientDetail />
            <IngredientDetail />
            <IngredientDetail />
            <IngredientDetail />
          </ul>
        </div>
        <div className={styles.info}>
        <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
        <TotalCount totalPrice={'520'} type='default'/>
        </div>
      </div>
    );
}