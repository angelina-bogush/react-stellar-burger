import styles from "./FeedPage.module.css";
import { FeedCards } from "../../components/feed/feedCards/FeedCards";
import { FeedOrders } from "../../components/feed/feedOrders/FeedOrders";

export const FeedPage = () => {
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
