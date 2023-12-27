import styles from "./burger-item.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../../services/store/store.types";
import { useRef } from "react";
import { deleteIngredient } from "../../../services/actions/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import { IIngredient } from "../../../services/types/ingredients";
import { IBurgerConstructorIngredient } from "../../../services/reducers/burger-constructor-reducer";

interface IBurgerItemProps{
  moveItem:(dragIndex: number, hoverIndex: number, elseProducts: IBurgerConstructorIngredient[]) => void
  id: string
  item: IIngredient
  index: number
  elseProducts: IBurgerConstructorIngredient[]
}

interface IItem extends IIngredient {
  index: number
}

export const BurgerItem = ({ moveItem, id, item, index, elseProducts }: IBurgerItemProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "moveItem",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: IItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if(!clientOffset) return
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex, elseProducts);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging, cursor }, drag] = useDrag({
    type: "moveItem",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      cursor: monitor.isDragging() ? "grabbing" : "grab",
    }),
  });
  const opacity = isDragging ? styles.hidden : styles.visible;
  drag(drop(ref));

  return (
    <div
      className={`${opacity}`}
      ref={ref}
      data-handler-id={handlerId}
      style={{ cursor }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={String(item.image_mobile)}
        handleClose={() => {
          dispatch(deleteIngredient(String(item._id)));
        }}
      />
    </div>
  );
};
