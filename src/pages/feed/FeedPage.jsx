import styles from "./FeedPage.module.css";
import { FeedCards } from "../../components/feed/feedCards/FeedCards";
import { FeedOrders } from "../../components/feed/feedOrders/FeedOrders";
import { allOrdersUrl } from "../../utils/api/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Connect, Disconnect } from "../../services/actions/feed";

export const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Connect(allOrdersUrl));
  console.log(orders)
    return () => {
      dispatch(Disconnect(allOrdersUrl));
    };
  }, [dispatch]);

  const { orders, error } = useSelector((store) => store.feedReducer.orders)
  console.log(error)

  return (
    <div className={styles.pageContainer}>
      <p className="text text_type_main-large">Лента заказов</p>
      <div className={styles.content}>
            <FeedCards/>
            <FeedOrders/>
      </div>
    </div>
  );
};
