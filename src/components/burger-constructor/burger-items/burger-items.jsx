import styles from './burger-items.module.css';
import PropTypes from 'prop-types';
import blueImgPath from '../../../images/blue.png';
import pinkImgPath from '../../../images/pink.png';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
const BurgerItems = (props) => {
    return (
      <div className={styles.container}>
        <div className={styles.elementContainer}>
          <ConstructorElement
            className={styles.test}
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={pinkImgPath}
          />
        </div>
        <div className={`${styles.scroll} custom-scroll`}>
          {props.data.map((ingred) => (
            <div className={styles.elementIcon} key={ingred._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ingred.name}
                price={ingred.price}
                thumbnail={ingred.image_mobile}
              />
            </div>
          ))}
        </div>
        <div className={styles.elementContainer}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={blueImgPath}
          />
        </div>
      </div>
    );
}
BurgerItems.propTypes = {
  data: PropTypes.array
}
export default BurgerItems