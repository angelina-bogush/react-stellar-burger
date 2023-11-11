import styles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from "./burger-items/burger-items";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrderApi } from "../../utils/api/order";
import { setOrderNumberSuccess, setOrderNumberFailed, setOrderNumberRequest } from "../../services/actions/order-number";
import { useDrop } from "react-dnd";
import {
  addIngredients,
  addBun,
} from "../../services/actions/burger-constructor";
import { ingredient } from "../../utils/data";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const orderNumber = useSelector((state) => state.orderReducer.order);
  const constructorIngredients = useSelector(
    (state) => state.burgerConstructorReducer.ingredients
  );
  const constructorBun = useSelector(
    (state) => state.burgerConstructorReducer.bun
  );
  const [clickedModal, setClickedModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    if (constructorBun !== null) {
      price += constructorBun.price * 2;
    }
    if (constructorIngredients.length !== 0) {
      price += constructorIngredients.reduce(
        (acc, curr) => acc + curr.ingredient.price,
        0
      );
    }
    setTotalPrice(price);
  }, [constructorBun, constructorIngredients]);

  const [{ isHover, isCanD }, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      item.type === ingredient.bun
        ? dispatch(addBun(item))
        : dispatch(addIngredients(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      isCanD: monitor.canDrop(),
    }),
  });
  const borderStyle = isHover
    ? styles.borderIn
    : isCanD
    ? styles.borderOut
    : styles.borderNone;

  const getIngredientsId = () => {
    const ingredId = constructorIngredients.map((item) => item.ingredient._id);
    const bunId = constructorBun._id;
    return [bunId, ...ingredId, bunId];
  };
  const handleCreateOrder = () => {
    const ingredId = getIngredientsId();
    dispatch(setOrderNumberRequest())
    createOrderApi(ingredId)
      .then((data) => dispatch(setOrderNumberSuccess(data.order.number)))
      .catch((err) => {
        dispatch(setOrderNumberFailed())
        console.log(err)
      }
      );
    setClickedModal(true);
  };
  const handleCloseModal = (value) => {
    setClickedModal(value);
    dispatch(setOrderNumberSuccess(null));
  };

  return (
    <div className={`${styles.container} pl-4 pr-4`}>
      <div
        ref={dropRef}
        className={`pt-5 pb-5 ${styles.dropContainer} ${borderStyle}`}
      >
        {(constructorBun !== null || constructorIngredients.length !== 0) && (
          <BurgerItems
            constructorIngredients={constructorIngredients}
            constructorBun={constructorBun}
          />
        )}
        <div className={styles.totalContainer}>
          <div className={styles.total}>
            <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
            <CurrencyIcon />
          </div>

          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={handleCreateOrder}
            disabled={constructorBun === null}
          >
            Нажми на меня
          </Button>
        </div>
        {clickedModal && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails orderNumber={orderNumber} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
