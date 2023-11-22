import { ProfileNav } from "../../components/profile/profileNav/profileNav";
import { FeedCards } from "../../components/feed/feedCards/FeedCards";
import styles from "./OrdersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { profileOrders } from "../../services/selectors/ingredientsSelectors";
import { getCookie } from "../../utils/cookie";
import { userOrdersUrl } from "../../utils/api/api";
import { useEffect } from "react";
import { connectProfile, disconnectProfile } from "../../services/actions/feed-profile";

export const OrdersPage = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  const orders = useSelector(profileOrders)
  const accessToken = getCookie('accessToken')
  const token = accessToken.split('Bearer ')[1]
  const url = userOrdersUrl(token)

  useEffect(() => {
    dispatch(connectProfile(url));
    return () => {
      dispatch(disconnectProfile(url));
    };
  }, [dispatch, url]);
  return (
    <div className={styles.pageContainer}>
      <ProfileNav />
      <FeedCards type="orders" orders={orders}/>
    </div>
  );
};
