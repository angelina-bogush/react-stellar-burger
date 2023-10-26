import { BurgerConstructorPage, LoginPage, RegistrationPage, Layout, ForgotPasswordPage} from "../../../pages";
import { LOGIN_PATH, REGISTRATION_PATH, FORGOT_PASSWORD } from "./routes";

export const routerConfig = [
 
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
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
        element: <ForgotPasswordPage/>
      }
    ],
  },
];