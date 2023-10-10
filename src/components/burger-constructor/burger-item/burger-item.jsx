import styles from './burger-item.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from 'react-redux';
import { useRef } from 'react';
import { deleteIngredient } from '../../../services/actions/burger-constructor';
import {useDrag, useDrop} from "react-dnd";

export const BurgerItem = ({moveItem, id, item, index, elseProducts, key}) => {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const [{handlerId}, drop] = useDrop({
        accept: "moveItem",
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
          moveItem(dragIndex, hoverIndex, elseProducts)
          item.index = hoverIndex
        },
      })
      const [{isDragging, cursor}, drag] = useDrag({
        type: "moveItem",
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

    return(
        <div className={styles.elementIcon} ref={ref} data-handler-id={handlerId} style={{cursor}}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image_mobile}
          handleClose={() => {dispatch(deleteIngredient(item._id))}}
        />
      </div> 
    )
}

