import { ProfileNav } from "../../components/profile/profileNav/profileNav";
import { FeedCards } from "../../components/feed/feedCards/FeedCards";
import styles from "./OrdersPage.module.css";
export const OrdersPage = () => {
  return (
    <div className={styles.pageContainer}>
      <ProfileNav />
      <FeedCards type="orders" />
    </div>
  );
};
