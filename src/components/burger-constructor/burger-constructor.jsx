import styles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from "./burger-items/burger-items";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrderApi } from "../../utils/api";
import { setOrderNumber } from "../../services/actions/actions";
import { useDrop } from "react-dnd";
import { ingredient } from "../../utils/data";
import { SET_CONSTRUCTOR_BUN, SET_CONSTRUCTOR_INGREDIENTS } from "../../services/actions/actions";

const BurgerConstructor = ({onDrop}) => {
  const dispatch = useDispatch()
  const item = useSelector(state => state.modalReducer.currentIngredient)
  const orderNumber = useSelector(state => state.orderReducer.order)
  const constructorIngred = useSelector(state => state.modalReducer.constructorIngredients)
  const [clickedModal, setClickedModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = 0;
    if (constructorIngred.bun !== null) {
      price += constructorIngred.bun.price * 2;
    }
    if (constructorIngred.ingredients.length !== 0) {
      price += constructorIngred.ingredients.reduce(
        (acc, curr) => acc + curr.price,
        0
      );
    }
    setTotalPrice(price);
  }, [constructorIngred]);

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item){
      item.type === ingredient.bun ? dispatch({type: SET_CONSTRUCTOR_BUN, payload: item}) : dispatch({type: SET_CONSTRUCTOR_INGREDIENTS, payload: item})
    }
  })
  

  const handleOpenModal = () => {
    const ingredId = constructorIngred.ingredients.map(item => item._id);
    const bunId = constructorIngred.bun._id
    const ingredientsId = [bunId, ...ingredId, bunId];
    //запрос на получение номера заказа
    createOrderApi(ingredientsId)
    .then(data => dispatch(setOrderNumber(data.order.number)))
    .catch(err => console.log(err))
    setClickedModal(true);
  };
  const handleCloseModal = (value) => {
    setClickedModal(value);
    dispatch(setOrderNumber(null))
  };

  return (
    <div className={`${styles.container} pl-4 pr-4`} ref={dropRef} onDrop={onDrop}>
      {(constructorIngred.bun !== null || constructorIngred.ingredients.length !== 0)  && <BurgerItems constructorIngred={constructorIngred}/>}
      <div className={styles.totalContainer}>
        <div className={styles.total}>
          <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
          <CurrencyIcon />
        </div>

        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={handleOpenModal}
        >
          Нажми на меня
        </Button>
      </div>
      {clickedModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderNumber={orderNumber}/>
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
