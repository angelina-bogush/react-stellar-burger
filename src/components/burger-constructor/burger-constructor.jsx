import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import blueImgPath from '../../images/blue.png';
import pinkImgPath from '../../images/pink.png';
import { data } from '../../utils/data';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {

    return (
      <div className={`${styles.container} pl-4 pr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={pinkImgPath}
        />
        <div className={`${styles.scroll} custom-scroll`}>
        {data.map((ingred) => (
           <div className={styles.elementIcon}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={ingred.name}
            price={ingred.price}
            thumbnail={ingred.image_mobile}
          />
          </div>
        ))}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={blueImgPath}
        />
      </div>
    );
}
export default BurgerConstructor