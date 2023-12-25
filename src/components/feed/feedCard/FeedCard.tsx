import styles from "./FeedCard.module.css";
import { useLocation, Link } from "react-router-dom";
import { TotalCount } from "../../burger-constructor/totalCount/TotalCount";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { allIngredients } from "../../../services/selectors/ingredientsSelectors";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { IFeedOrder } from "../../../services/types/feed";
import { IIngredient } from "../../../services/types/ingredients";

interface IFeedCardProps{
  type: 'orders' | 'feed'
  order: IFeedOrder
}

export const FeedCard = ({ type, order }:IFeedCardProps) => {
  const location = useLocation();
  const ingredients = useSelector(allIngredients);
  console.log(ingredients)

  const orderIngredients = useMemo(() => {
    if (order?.ingredients) {
      return order.ingredients.map((ingredientId) => {
        return ingredients.find(
          (ingredient: IIngredient) => ingredientId === ingredient._id
        );
      });
    }
    return [];
  }, [order?.ingredients, ingredients]);
  const orderPrice = () => {
    return orderIngredients?.reduce((acc, i) => acc + Number(i?.price), 0);
  };

  const orderPart = orderIngredients?.slice(6).length;
  const orderStatuses: Record<string, string> = {
    done: "Выполнен",
    created: "Создан",
    pending: "Готовится",
  }
  ;  

  return (
    <Link
      className={styles.link}
      key={order.number}
      to={`${order.number}`}
      state={{ background: location }}
    >
      <div className={styles.card}>
        <span className={styles.header}>
          <p className="text text_type_digits-default">{`#${order.number}`}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
        </span>
        <div className={styles.description}>
          <p className="text text_type_main-medium">{order.name}</p>
          {type === "orders" &&
            (order.status === "done" ? (
              <p
                className={`text text_type_main-default ${styles.status} pt-2`}
              >
                {orderStatuses[order.status]}
              </p>
            ) : (
              <p className={"text text_type_main-default pt-2"}>
                {orderStatuses[order.status]}
              </p>
            ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.iconsWrapper}>
            {orderIngredients.map((ingred, index) => {
              if (index < 6) {
                return (
                  <div className={styles.imageWrapper} key={index}>
                    <img
                      alt={ingred?.name}
                      src={ingred?.image}
                      className={styles.icon}
                    />
                    {index === 5 && orderPart !== 0 && (
                      <div className={styles.counter}>
                        <p className="text text_type_digits-default">{`+${orderPart}`}</p>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
          <TotalCount totalPrice={orderPrice()} type="default" />
        </div>
      </div>
    </Link>
  );
};
