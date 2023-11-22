import styles from "./OrderInfoPage.module.css";
import { OrderInfo } from "../../components/modal/order-info/OrderInfo";

export const OrderInfoPage = () => {
  return (
    <div className={styles.page}>
      <OrderInfo />
    </div>
  );
};
