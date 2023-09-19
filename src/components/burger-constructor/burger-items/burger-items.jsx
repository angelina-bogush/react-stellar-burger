import styles from "./burger-items.module.css";
import PropTypes from "prop-types";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useContext } from "react";
import { IngredientsContext } from "../../../services/ingredientsContext";
import { ingredient } from "../../../utils/data";

const BurgerItems = ({topBunId, bottomBunId}) => {
  const {ingredients, setIngredients} = useContext(IngredientsContext)
  const buns = useMemo(() => ingredients.filter((item) => item.type === ingredient.bun), [ingredients]);
  const elseProducts = useMemo(() => ingredients.filter((item) => item.type !== ingredient.bun), [ingredients]);
  const topBun = useMemo(() => buns.find((item) => item._id === topBunId), [buns, topBunId]);
  const bottomBun = useMemo(() => buns.find((item) => item._id === bottomBunId), [buns, bottomBunId]);
  return (
    <div className={styles.container}>
      <div className={styles.elementContainer}>
        <ConstructorElement
          type={topBun.type}
          isLocked
          text={topBun.name}
          price={topBun.price}
          thumbnail={topBun.image_mobile}
        />
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
        <ConstructorElement
          type={bottomBun.type}
          isLocked
          text={bottomBun.name}
          price={bottomBun.price}
          thumbnail={bottomBun.image_mobile}
        />
      </div>
    </div>
  );
};
BurgerItems.propTypes = {
  topBunId: PropTypes.string.isRequired,
  bottomBunId: PropTypes.string.isRequired
};
export default BurgerItems;
