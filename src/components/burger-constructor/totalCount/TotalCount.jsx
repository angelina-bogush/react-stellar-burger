import styles from './TotalCount.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export const TotalCount = ({totalPrice, type}) => {

    return(
        <div className={styles.total}>
            <p className={`text text_type_digits-${type} pr-2`}>{totalPrice}</p>
            <CurrencyIcon />
          </div>
    )
}