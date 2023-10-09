import styles from "./burger-items.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuid } from 'uuid';
import { deleteIngredient } from "../../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { changeIngredientsOrder, moveProduct } from "../../../services/actions/burger-constructor";
import { useCallback, useRef } from "react";
import update from 'immutability-helper'


const BurgerItems = ({constructorIngredients, constructorBun}) => {
  const dispatch = useDispatch()
  const bun =  constructorBun;
  const elseProducts = constructorIngredients;
  const moveCard = useCallback((dragIndex, hoverIndex, elseProducts) => {
    const newProduct = update(elseProducts, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, elseProducts[dragIndex]],
      ],
    })
    dispatch(moveProduct(newProduct)
    )
  }, [])

  const ref = useRef(null)

  const [{handlerId}, drop] = useDrop({
    accept: "moveProduct",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex, other)
      item.index = hoverIndex
    },
  })
  const [{isDragging, cursor}, drag] = useDrag({
    type: "moveProduct",
    item: () => {
      return {id, index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      cursor: monitor.isDragging() ? 'grabbing' : 'grab'
    }),
  })
  const opacity = isDragging ? styles.hidden : styles.show
  drag(drop(ref))

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
        {elseProducts.map(ingred => {
          return(
          <div className={styles.elementIcon} key={uuid()} ref={ref} data-handler-id={handlerId} style={{cursor}}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={ingred.name}
            price={ingred.price}
            thumbnail={ingred.image_mobile}
            handleClose={() => dispatch(deleteIngredient(ingred))}
          />
        </div> 
          )})}
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
