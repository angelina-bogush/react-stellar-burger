import styles from "./FeedCards.module.css";
import { FeedCard } from "../feedCard/FeedCard";
import { IFeedOrder } from "../../../services/types/feed";

interface IFeedCardsProps{
  type: 'orders'
  orders: IFeedOrder[]
}

export const FeedCards = ({ type, orders }: IFeedCardsProps) => {
  return (
    <section className={`${styles.cardContainer} custom-scroll`}>
      {orders.map((order) => (
        <FeedCard type={type} order={order} key={order.number} />
      ))}
    </section>
  );
};
