import { LoginForm } from "../../components/login/loginForm/LoginForm";
import styles from "./LoginPage.module.css";
import {
  REGISTRATION_PATH,
  FORGOT_PASSWORD,
} from "../../app/router/config/routes";
import { TextWithLink } from "../../components/form/textWithLink/TextWithLink";
export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <div className={styles.linkContainer}>
        <TextWithLink
          text="Вы - новый пользователь?"
          textLink="Зарегистрироваться"
          path={REGISTRATION_PATH}
        />
        <TextWithLink
          text="Забыли пароль?"
          textLink="Восстановить пароль"
          path={FORGOT_PASSWORD}
        />
      </div>
    </div>
  );
};
