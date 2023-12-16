import styles from "./FeedOrders.module.css";
import { FeedList } from "../feedList/FeedList";
import { IFeedOrder } from "../../../services/types/feed";

interface IFeedOrdersProps{
  orders: IFeedOrder[]
  total: number
  totalToday: number
}

export const FeedOrders = ({ total, totalToday, orders }: IFeedOrdersProps) => {
  const doneOrdersNumbers = orders
    .filter((order) => order.status === "done")
    .map((order) => order.number);
  const ordersInWorkNumbers = orders
    .filter((order) => order.status !== "done")
    .map((order) => order.number);

  return (
    <section className={styles.ordersContainer}>
      <div className={styles.feedListContainer}>
        {doneOrdersNumbers.length > 10 ? (
          <FeedList
            title="Готовы:"
            numbers={doneOrdersNumbers}
            done
            twoColumns
          />
        ) : (
          <FeedList title="Готовы:" numbers={doneOrdersNumbers} done />
        )}
        {ordersInWorkNumbers.length > 10 ? (
          <FeedList
            title="В работе:"
            numbers={ordersInWorkNumbers}
            twoColumns
          />
        ) : (
          <FeedList title="В работе:" numbers={ordersInWorkNumbers} />
        )}
      </div>
      <div className={styles.doneOrders}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${styles.shadow}`}>
          {total}
        </p>
      </div>
      <div className={styles.doneOrders}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.shadow}`}>
          {totalToday}
        </p>
      </div>
    </section>
  );
};
