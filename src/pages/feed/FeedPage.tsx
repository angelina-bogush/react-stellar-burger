import styles from "./FeedPage.module.css";
import { FeedCards } from "../../components/feed/feedCards/FeedCards";
import { FeedOrders } from "../../components/feed/feedOrders/FeedOrders";
import { allOrdersUrl } from "../../utils/api/api";
import { useEffect } from "react";
import { connectFeed, disconnectFeed } from "../../services/actions/feed";
import {
  orders,
  total,
  totalToday,
} from "../../services/selectors/ingredientsSelectors";
import { Loader } from "../../components/loader/Loader";
import { useSelector, useDispatch } from "../../services/store/store.types";

export const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectFeed(allOrdersUrl));
    return () => {
      dispatch(disconnectFeed());
    };
  }, [dispatch]);

  const ordersFeed = useSelector(orders);
  const totalFeed = useSelector(total);
  const totalTodayFeed = useSelector(totalToday);
  const isLoading = useSelector((store) => store.feedReducer.isLoading);

  return (
    <div className={styles.pageContainer}>
      <p className="text text_type_main-large">Лента заказов</p>
      <div className={styles.content}>
        {ordersFeed !== null && <FeedCards orders={ordersFeed} type="feed" />}
        {totalFeed && totalTodayFeed && (
          <FeedOrders
            total={totalFeed}
            totalToday={totalTodayFeed}
            orders={ordersFeed}
          />
        )}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};
