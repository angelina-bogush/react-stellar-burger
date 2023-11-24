import styles from "./OrderInfoPage.module.css";
import { OrderInfo } from "../../components/modal/order-info/OrderInfo";
import { allOrdersUrl, userOrdersUrl } from "../../utils/api/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectFeed, disconnectFeed } from "../../services/actions/feed";


export const OrderInfoPage = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectFeed(allOrdersUrl));
    return () => {
      dispatch(disconnectFeed(allOrdersUrl));
    };
  }, [dispatch]);


  return (
    <div className={styles.page}>
      <OrderInfo />
    </div>
  );
};
