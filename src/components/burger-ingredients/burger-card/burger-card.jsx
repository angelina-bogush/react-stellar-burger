import styles from "./burger-card.module.css";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { ingredientTypes } from "../../../utils/proptypes";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BurgerCard = ({ description, price, img, count, item }) => {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const location = useLocation();
  const ingredientId = item._id;

  return (
    <Link
      className={styles.link}
      key={ingredientId}
      to={`ingredients/${ingredientId}`}
      state={{ background: location }}
    >
      <div className={styles.container} ref={dragRef}>
        <img src={img} alt={description} className="pr-4 pl-4"></img>
        <div className={`${styles.price} pb-2 pt-1`}>
          <p className="text text_type_digits-medium pr-2">{price}</p>
          <CurrencyIcon></CurrencyIcon>
        </div>
        <p className={`text text_type_main-default ${styles.description}`}>
          {description}
        </p>
        {count >= 1 && (
          <Counter count={count} size="default" extraClass="m-1" />
        )}
      </div>
    </Link>
  );
};
BurgerCard.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  count: PropTypes.number,
  item: ingredientTypes,
};
export default BurgerCard;
