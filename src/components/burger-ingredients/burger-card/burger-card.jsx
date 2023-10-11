import styles from './burger-card.module.css';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

const BurgerCard = ({onClick, description, price, img, count, item}) => {
    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: item,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return(
        <div className={styles.container} onClick={onClick} ref={dragRef}>
            <img src={img} alt={description} className="pr-4 pl-4"></img>
            <div className={`${styles.price} pb-2 pt-1`}>
                <p className="text text_type_digits-medium pr-2">{price}</p>
                <CurrencyIcon></CurrencyIcon>
            </div>
            <p className={`text text_type_main-default ${styles.description}`}>{description}</p>
            {count >= 1 &&
            <Counter count={count} size="default" extraClass="m-1" />
            }           
        </div>
    )
}
BurgerCard.propTypes = {
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    count: PropTypes.number,
    onClick: PropTypes.func.isRequired
  };
export default BurgerCard