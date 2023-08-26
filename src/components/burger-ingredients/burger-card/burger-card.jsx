import styles from './burger-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerCard = (props) => {

    return(
        <div className={`${styles.container}`}>
            <img src={props.img} alt={props.alt} className="pr-4 pl-4"></img>
            <div className={`${styles.price} pb-2 pt-1`}>
                <p className="text text_type_digits-medium pr-2">{props.price}</p>
                <CurrencyIcon></CurrencyIcon>
            </div>
            <p className={`text text_type_main-default ${styles.description}`}>{props.description}</p>
        </div>

    )
}
export default BurgerCard