import { TotalCount } from "../../burger-constructor/totalCount/TotalCount";
import styles from "./OrderInfo.module.css";
import { IngredientDetail } from "./ingredient-detail/IngredientDetail";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  allIngredients,
  profileOrders,
} from "../../../services/selectors/ingredientsSelectors";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { orders } from "../../../services/selectors/ingredientsSelectors";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { IFeedOrder } from "../../../services/types/feed";
import { IIngredient } from "../../../services/types/ingredients";
type TOrderInfoProps = {
  modal: boolean
}

export const OrderInfo = ({ modal }: TOrderInfoProps) => {
  const location = useLocation();
  const { number } = useParams();
  const ingredients = useSelector(allIngredients);
  const ordersFeed = useSelector(orders);
  const profileOrder = useSelector(profileOrders);
  let currentOrder: IFeedOrder | null = null;

  if (location.pathname.includes("/profile/orders")) {
    currentOrder = profileOrder?.find((order: IFeedOrder) => order.number === Number(number));
  } else if (location.pathname.includes("/feed")) {
    currentOrder = ordersFeed?.find((order: IFeedOrder) => order.number === Number(number));
  }
  
  const currentOrderIngredients = useMemo(() => {
    if (currentOrder?.ingredients) {
      return currentOrder.ingredients.map((ingredientId) => {
        return ingredients.find(
          (ingredient: IIngredient) => ingredientId === ingredient._id
        );
      });
    }
    return [];
  }, [currentOrder?.ingredients, ingredients]);

  const numberOfIngredients = (ingredient: IIngredient) => {
    return currentOrderIngredients?.filter((item) => item._id === ingredient._id).length;
  }

  const orderPrice = () => {
    return currentOrderIngredients?.reduce((acc, i) => acc + i.price, 0);
  };

    const uniqueIngredients = Array.from(new Set(currentOrderIngredients));

  const orderStatuses: Record<string, string> = {
    done: "Выполнен",
    created: "Создан",
    pending: "Готовится",
  };

  return (
    <div className={styles.container}>
      <p
        className={`text text_type_digits-default ${
          modal ? styles.orderModal : styles.order
        }`}
      >{`#${currentOrder?.number}`}</p>
      <p className="text text_type_main-medium pb-2">{currentOrder?.name}</p>
      <p className={`text text_type_main-default ${styles.blue}`}>
        {currentOrder && orderStatuses[currentOrder.status]}
      </p>
      <div className={styles.components}>
        <p className="text text_type_main-medium">Состав:</p>
        <ul className={`${styles.list} custom-scroll`}>
          {uniqueIngredients?.map((ingred, index) => (
            <IngredientDetail ingred={ingred} key={index} quantity={numberOfIngredients(ingred)}/>
          ))}
        </ul>
      </div>
      <div className={styles.info}>
        <p className="text text_type_main-default text_color_inactive">
          {currentOrder && <FormattedDate date={new Date(currentOrder?.createdAt)} />}
        </p>
        <TotalCount totalPrice={orderPrice()} type="default" />
      </div>
    </div>
  );
};
