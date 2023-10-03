import styles from "./burger-items.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuid } from 'uuid';

const BurgerItems = ({constructorIngred}) => {
  
  const bun =  constructorIngred.bun;
  const elseProducts = constructorIngred.ingredients;
  
  return (
    <div className={styles.container}>
      <div className={styles.elementContainer}>
        {bun !== null &&
        <ConstructorElement
          type={bun.type}
          isLocked
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image_mobile}/>}
      </div>

      <div className={`${styles.scroll} custom-scroll`}>
        {elseProducts.map((ingred) => (
          <div className={styles.elementIcon} key={uuid()}>
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
      {bun !== null &&
        <ConstructorElement
          type={bun.type}
          isLocked
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />}
      </div>
    </div>
  );
};
export default BurgerItems;
