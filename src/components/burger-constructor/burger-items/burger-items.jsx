import styles from "./burger-items.module.css";
import PropTypes from "prop-types";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useContext } from "react";
import { ConstructorContext } from "../../../services/ingredientsContext";
import { ingredient } from "../../../utils/data";

const BurgerItems = () => {
  const {constructorIngred, setConstructorIngred} = useContext(ConstructorContext)

  // const bun = useMemo(() => constructorIngred.filter((item) => item.type === ingredient.bun), [ingredients]);
  const bun =  constructorIngred.bun;
  const elseProducts = constructorIngred.ingredients;
  // const elseProducts = useMemo(() => constructorIngred.ingredients.filter((item) => item.type !== ingredient.bun), [ingredients]);
  // const topBun = useMemo(() => buns.find((item) => item._id === topBunId), [buns, topBunId]);
  // const bottomBun = useMemo(() => buns.find((item) => item._id === bottomBunId), [buns, bottomBunId]);
  return (
    <div className={styles.container}>
      <div className={styles.elementContainer}>
        {bun !== null &&
        <ConstructorElement
          type={bun.type}
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image_mobile}/>}
      </div>

      <div className={`${styles.scroll} custom-scroll`}>
        {elseProducts.map((ingred) => (
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
      {bun !== null &&
        <ConstructorElement
          type={bun.type}
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />}
      </div>
    </div>
  );
};
// BurgerItems.propTypes = {
//   topBunId: PropTypes.string.isRequired,
//   bottomBunId: PropTypes.string.isRequired
// };
export default BurgerItems;
