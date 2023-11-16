import styles from "./ForgotPasswordPage.module.css";
import { Form } from "../../components/form/Form";
import { MyInput } from "../../components/form/input/MyInput";
import { LOGIN_PATH } from "../../app/router/config/routes";
import { TextWithLink } from "../../components/form/textWithLink/TextWithLink";
import { forgotPassword } from "../../utils/api/api";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

import { RESET_PASSWORD } from "../../app/router/config/routes";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");

  const forgotPasswordClick = async (e) => {
    e.preventDefault();
    const res = await forgotPassword(emailValue);
    if (res?.status === 200) {
      navigate(RESET_PASSWORD);
      localStorage.setItem("forgotPasswordVisited", true);
    }
  };

  return (
    <div className={styles.container}>
      <Form
        title="Восстановление пароля"
        buttonText="Восстановить"
        onSubmit={(e) => forgotPasswordClick(e)}
      >
        <MyInput
          type="email"
          placeholder={"Укажите e-mail"}
          value={emailValue}
          setValue={setEmailValue}
        />
      </Form>
      <TextWithLink
        text="Вспомнили пароль?"
        textLink="Войти"
        path={LOGIN_PATH}
      />
    </div>
  );
};
