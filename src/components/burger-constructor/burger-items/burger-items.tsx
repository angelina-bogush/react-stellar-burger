import styles from "./burger-items.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../../services/store/store.types";
import { moveProduct } from "../../../services/actions/burger-constructor";
import { useCallback } from "react";
import update from "immutability-helper";
import { BurgerItem } from "../burger-item/burger-item";
import { IIngredient } from "../../../services/types/ingredients";
import { IBurgerConstructorIngredient } from "../../../services/reducers/burger-constructor-reducer";

interface IBurgerItemsProps{
  constructorIngredients: IBurgerConstructorIngredient[]
  constructorBun: IIngredient | null
}

const BurgerItems = ({ constructorIngredients, constructorBun }: IBurgerItemsProps) => {
  const dispatch = useDispatch();
  const bun = constructorBun;
  const elseProducts = constructorIngredients;

  const moveItem = useCallback(
    (dragIndex, hoverIndex, elseProducts) => {
      const newProduct = update(elseProducts, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, elseProducts[dragIndex]],
        ],
      });
      dispatch(moveProduct(newProduct));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <div className={styles.elementContainer}>
        {bun && bun.image_mobile  && (
          <ConstructorElement
            type={"top"}
            isLocked
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>

     {elseProducts && <div className={`${styles.scroll} custom-scroll`}>
        {elseProducts.map((ingred: IBurgerConstructorIngredient, index: number) => (
          <BurgerItem
            moveItem={moveItem}
            index={index}
            key={ingred.key}
            id={String(ingred.ingredient._id)}
            item={ingred.ingredient}
            elseProducts={elseProducts}
          />
        ))}
      </div> }

      <div className={styles.elementContainer}>
        {bun && bun.image_mobile && (
          <ConstructorElement
            type={"bottom"}
            isLocked
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>
    </div>
  );
};

export default BurgerItems;
