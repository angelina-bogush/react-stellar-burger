import styles from "./OrderInfoPage.module.css";
import { OrderInfo } from "../../components/modal/order-info/OrderInfo";
import { allOrdersUrl, userOrdersUrl } from "../../utils/api/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectFeed, disconnectFeed } from "../../services/actions/feed";
import { getCookie } from "../../utils/cookie";
import { connectProfile, disconnectProfile } from "../../services/actions/feed-profile";


export const OrderInfoPage = () => {
const dispatch = useDispatch();
const accessToken = getCookie("accessToken");
const token = accessToken.split("Bearer ")[1];
const url = userOrdersUrl(token);

  useEffect(() => {
    dispatch(connectFeed(allOrdersUrl));
    dispatch(connectProfile(url));
    return () => {
      dispatch(disconnectFeed(allOrdersUrl));
      dispatch(disconnectProfile(url));
    };
  }, [dispatch, url]);


  return (
    <div className={styles.page}>
      <OrderInfo />
    </div>
  );
};
