import { BurgerConstructorPage, LoginPage, RegistrationPage, Layout, ForgotPasswordPage, ProfilePage, ResetPasswordPage} from "../../../pages";
import { LOGIN_PATH, REGISTRATION_PATH, FORGOT_PASSWORD, PROFILE, RESET_PASSWORD, CONSTRUCTOR_PATH } from "./routes";
import { PrivateRoute } from "../providers/PrivateRoute";
import { PublicRoute } from "../providers/PublicRoute";

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
      {
        path: CONSTRUCTOR_PATH,
        element: <BurgerConstructorPage />,
      },
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
    ]
  }
];