import { BurgerConstructorPage, LoginPage, RegistrationPage, Layout} from "../../../pages";
import { LOGIN_PATH, REGISTRATION_PATH } from "./routes";

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
    ],
  },
];