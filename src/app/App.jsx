import styles from "./App.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  BurgerConstructorPage,
  ForgotPasswordPage,
  IngredientDetailsPage,
  Layout,
  LoginPage,
  OrdersPage,
  ProfilePage,
  RegistrationPage,
  ResetPasswordPage,
  FeedPage,
  OrderInfoPage
} from "../pages";
import {
  FEED_PATH,
  FORGOT_PASSWORD,
  HOME,
  INGREDIENT_INFO_PATH,
  LOGIN_PATH,
  ORDERS_PATH,
  PROFILE,
  REGISTRATION_PATH,
  RESET_PASSWORD,
  FEED_ID_PATH
} from "./router/config/routes";
import { PrivateRoute } from "./router/providers/PrivateRoute";
import AppHeader from "../components/app-header/app-header";
import { PublicRoute } from "./router/providers/PublicRoute";
import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import Modal from "../components/modal/modal";
import { useDispatch } from "react-redux";
import { getIngredients } from "../services/actions/ingredients";
import { useEffect } from "react";
import { OrderInfo } from "../components/modal/order-info/OrderInfo";

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getIngredients());
  }, []);
  return (
    <div className={styles.container}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={HOME} element={<BurgerConstructorPage />} />
        <Route
          path={PROFILE}
          element={
            <PrivateRoute>
              <ProfilePage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path={INGREDIENT_INFO_PATH}
          element={<IngredientDetailsPage />}
        />
        <Route
          path={REGISTRATION_PATH}
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path={LOGIN_PATH}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={FORGOT_PASSWORD}
          element={
            <PublicRoute>
              <ForgotPasswordPage />
            </PublicRoute>
          }
        />
        <Route
          path={RESET_PASSWORD}
          element={
            <PublicRoute>
              <ResetPasswordPage />
            </PublicRoute>
          }
        />
        <Route
          path={ORDERS_PATH}
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path={FEED_PATH}
          element={
            <PrivateRoute>
              <FeedPage />
            </PrivateRoute>
          }
        />
         <Route
          path={FEED_ID_PATH}
          element={
            <PrivateRoute>
              <OrderInfoPage />
            </PrivateRoute>
          }
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={INGREDIENT_INFO_PATH}
            element={
              <Modal title={"Детали ингредиентов"} onClose={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={FEED_ID_PATH}
            element={
              <Modal onClose={handleCloseModal}>
                <OrderInfo modal/>
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};
