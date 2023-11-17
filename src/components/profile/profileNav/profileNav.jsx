import styles from "./profileNav.module.css";
import { logoutAction } from "../../../services/actions/logout";
import { LOGIN_PATH, PROFILE } from "../../../app/router/config/routes";
import { useNavigate, useMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const ProfileNav = () => {
  const isProfileActive = useMatch("/profile");
  const isProfileOrderActive = useMatch("/profile/orders");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refresh = localStorage.getItem("refresh");
  const handleLogout = async () => {
    try {
      await dispatch(logoutAction(refresh));
      navigate(LOGIN_PATH);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.navigation}>
      <Link
        to={PROFILE}
        className={`text text_type_main-medium text_color_inactive ${
          styles.link
        } ${isProfileActive ? styles.linkActive : ""}`}
      >
        Профиль
      </Link>
      <Link
        to={"/profile/orders"}
        className={`text text_type_main-medium text_color_inactive ${
          styles.link
        } ${isProfileOrderActive ? styles.linkActive : ""}`}
      >
        История заказов
      </Link>
      <Link className={styles.link} onClick={handleLogout}>
        <p className="text text_type_main-medium">Выход</p>
      </Link>
      <p className={`${styles.description} text text_type_main-small`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};
