import { BurgerConstructorPage, LoginPage, RegistrationPage, Layout, ForgotPasswordPage, ProfilePage, ResetPasswordPage, IngredientDetailsPage} from "../../../pages";
import { LOGIN_PATH, REGISTRATION_PATH, FORGOT_PASSWORD, PROFILE, RESET_PASSWORD, CONSTRUCTOR_PATH, INGREDIENT_INFO_PATH } from "./routes";
import { PrivateRoute } from "../providers/PrivateRoute";
import { PublicRoute } from "../providers/PublicRoute";
import { useLocation } from "react-router-dom";

export const routerConfig = [
  {
    path: "/",
    element: (
    <PrivateRoute>
    <Layout />
    </PrivateRoute>
    ),
    children: [
      {
        path: PROFILE,
        element: <ProfilePage/>
      },
      {
        path: INGREDIENT_INFO_PATH,
        element: <IngredientDetailsPage/>
      }
    ],
  },
  {
    path: '/',
    element:(
      <PublicRoute>
    <Layout />
    </PublicRoute>
    ),
    children: [
      // {
      //   path: CONSTRUCTOR_PATH,
      //   element: <BurgerConstructorPage />,
      // },
      {
        path: LOGIN_PATH,
        element: <LoginPage />,
      },

      {
        path: REGISTRATION_PATH,
        element: <RegistrationPage />,
      },
      {
        path: FORGOT_PASSWORD,
        element: <ForgotPasswordPage />,
      },
      {
        path: RESET_PASSWORD,
        element: <ResetPasswordPage/>
      },
      // {
      //   path: INGREDIENT_INFO_PATH,
      //   element: <IngredientDetailsPage />
      // },
      // {
      //   path: INGREDIENT_INFO_PATH,
      //   element: <BurgerConstructorPage />
      // },
    ]
  }
];