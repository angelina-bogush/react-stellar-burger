import styles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from "./burger-items/burger-items";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import { useState, useContext, useReducer, useMemo, useEffect } from "react";
import { ConstructorContext } from "../../services/ingredientsContext";

const BurgerConstructor = () => {
  const { constructorIngred, setConstructorIngred } =
    useContext(ConstructorContext);
  const [clickedModal, setClickedModal] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + action.payload;
      case "remove":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [priceState, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    if (constructorIngred.bun !== null) {
      dispatch({ type: "add", payload: constructorIngred.bun.price * 2 });
    }
    if (constructorIngred.ingredients.length !== 0) {
      dispatch({
        type: "add",
        payload: constructorIngred.ingredients.reduce(
          (acc, curr) => acc + curr.price,
          0
        ),
      });
    }
  }, [constructorIngred]);

  const handleOpenModal = () => {
    setClickedModal(true);
  };
  const handleCloseModal = (value) => {
    setClickedModal(value);
  };

  return (
    <div className={`${styles.container} pl-4 pr-4`}>
      {(constructorIngred.bun !== null ||
        constructorIngred.ingredients !== []) && <BurgerItems />}
      <div className={styles.totalContainer}>
        <div className={styles.total}>
          <p className="text text_type_digits-medium pr-2">{priceState}</p>
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
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
