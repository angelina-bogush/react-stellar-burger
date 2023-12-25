import styles from "./OrderInfoPage.module.css";
import { OrderInfo } from "../../components/modal/order-info/OrderInfo";
import { allOrdersUrl, userOrdersUrl } from "../../utils/api/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectFeed, disconnectFeed } from "../../services/actions/feed";
import { getCookie } from "../../utils/cookie";
import { connectProfile, disconnectProfile } from "../../services/actions/feed-profile";

type TOrderInfoProps = {
  isFeed?: boolean
}
export const OrderInfoPage = ({isFeed}:TOrderInfoProps) => {
const dispatch = useDispatch();

  useEffect(() => {
    if (isFeed) {
      dispatch(connectFeed(allOrdersUrl));
    } else {
      const accessToken = getCookie("accessToken");
      const token = accessToken?.split("Bearer ")[1];
      const url = userOrdersUrl(token ?? '');
      dispatch(connectProfile(url));
    }
    return () => {
      isFeed
        ? dispatch(disconnectFeed())
        : dispatch(disconnectProfile());
    };
  }, [dispatch]);


  return (
    <div className={styles.page}>
      <OrderInfo />
    </div>
  );
};
