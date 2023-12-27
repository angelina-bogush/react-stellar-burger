import styles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from "./burger-items/burger-items";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import { useState, useEffect } from "react";
import { createOrder } from "../../services/actions/order-number";
import { setOrderNumberSuccess } from "../../services/actions/order-number";
import { useDrop } from "react-dnd";
import {
  addIngredients,
  addBun,
} from "../../services/actions/burger-constructor";
import { ingredient } from "../../utils/data";
import { isUserAuth } from "../../utils/func";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../app/router/config/routes";
import { TotalCount } from "./totalCount/TotalCount";
import { Loader } from "../loader/Loader";
import { useSelector, useDispatch } from "../../services/store/store.types";
import { IIngredient } from "../../services/types/ingredients";
import { IBurgerConstructorIngredient } from "../../services/reducers/burger-constructor-reducer";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderNumber = useSelector((state) => state.orderReducer.order);
  const constructorIngredients = useSelector(
    (state) => state.burgerConstructorReducer.ingredients
  );
  const constructorBun = useSelector(
    (state) => state.burgerConstructorReducer.bun
  );
  const isLoading = useSelector((state) => state.orderReducer.isLoading)

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
    drop(item: IIngredient) {
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

  const getIngredientsId = ():string[] => {
    const ingredId = constructorIngredients.map((item) => String(item.ingredient._id));
    const bunId = String(constructorBun?._id);
    return [bunId, ...ingredId, bunId];
  };
  const handleCreateOrder = () => {
    if (!isUserAuth()) {
      navigate(LOGIN_PATH);
    } else {
    const ingredId = getIngredientsId();
    dispatch(createOrder(ingredId));
    setClickedModal(true);
    }
  };
  const handleCloseModal = () => {
    setClickedModal(false);
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
          <TotalCount totalPrice={totalPrice} type='medium'/>
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
            {orderNumber && <OrderDetails orderNumber={orderNumber} />}
            {isLoading && <Loader/>}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
