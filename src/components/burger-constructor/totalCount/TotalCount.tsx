import styles from './TotalCount.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
interface ITotalCountProps{
    totalPrice: number
    type: string
}
export const TotalCount = ({totalPrice, type}:ITotalCountProps) => {

    return(
        <div className={styles.total}>
            <p className={`text text_type_digits-${type} pr-2`}>{totalPrice}</p>
            <CurrencyIcon type='primary'/>
          </div>
    )
}