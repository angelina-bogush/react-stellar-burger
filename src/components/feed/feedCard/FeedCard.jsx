import styles from "./FeedCard.module.css";
import { IngredIcon } from "../ingredIcon/IngredIcon";
import { useLocation, Link } from "react-router-dom";
import { TotalCount } from "../../burger-constructor/totalCount/TotalCount";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { allIngredients } from "../../../services/selectors/ingredientsSelectors";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

export const FeedCard = ({ type, order }) => {
  const location = useLocation();
  const ingredients = useSelector(allIngredients);

  const orderIngredients = useMemo(() => {
    if (order?.ingredients) {
      return order.ingredients.map((ingredientId) => {
        return ingredients.find(
          (ingredient) => ingredientId === ingredient._id
        );
      });
    }
    return [];
  }, [order?.ingredients, ingredients]);

  const orderPart = orderIngredients?.slice(6).length;

  const orderPrice = () => {
    return orderIngredients?.reduce((acc, i) => acc + i.price, 0);
  };

  const orderStatuses = {
    done: "Выполнен",
    created: "Создан",
    pending: "Готовится",
  };

  return (
    <Link
      className={styles.link}
      //   key={ingredientId}
      to={`:id`}
      state={{ background: location }}
    >
      <div className={styles.card}>
        <span className={styles.header}>
          <p className="text text_type_digits-default">{order.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
        </span>
        <div className={styles.description}>
          <p className="text text_type_main-medium">{order.name}</p>
          {type === "orders" &&
            (order.status === "done" ? (
              <p className="text text_type_main-default pt-2">
                {orderStatuses[order.status]}
              </p>
            ) : (
              <p
                className={`text text_type_main-default ${styles.status} pt-2`}
              >
                {orderStatuses[order.status]}
              </p>
            ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.iconsWrapper}>
            {/* <IngredIcon />
            <IngredIcon />
            <IngredIcon /> */}
            {orderIngredients.map((ingred, index) => {
              if(index < 6){
                  return(
                    <div className={styles.imageWrapper} key={index}>
                      <img alt={ingred.name} src={ingred.image} className={styles.icon}/>
                    </div>
                  )
              }

            })
            }
          </div>
          <TotalCount totalPrice={"420"} type="default" />
        </div>
      </div>
    </Link>
  );
};
