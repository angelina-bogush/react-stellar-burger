import { useState, useEffect } from "react";
import { MyInput } from "../../components/form/input/MyInput";
import { TextWithLink } from "../../components/form/textWithLink/TextWithLink";
import { LOGIN_PATH } from "../../app/router/config/routes";
import { Form } from "../../components/form/Form";
import styles from "./ResetPasswordPage.module.css";
import { resetPassword } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [passwordValue, setPasswordValue] = useState("");
  const [codeValue, setCodeValue] = useState("");

  const resetPasswordClick = async (e) => {
    e.preventDefault();
    const res = await resetPassword(passwordValue, codeValue);
    if (res?.status === 200) {
      navigate(LOGIN_PATH);
    }
  };
  useEffect(() => {
    const forgotPasswordVisited = localStorage.getItem("forgotPasswordVisited");
    if (!forgotPasswordVisited || forgotPasswordVisited === 'false') {
      navigate(LOGIN_PATH);
    }
    console.log(forgotPasswordVisited)
    return () => {
      localStorage.removeItem("forgotPasswordVisited");
    }
  }, []);
  
  return (
    <div className={styles.container}>
      <Form
        title="Восстановление пароля"
        buttonText="Войти"
        onSubmit={(e) => resetPasswordClick(e)}
      >
        <MyInput
          input="password"
          placeholder={"Введите новый пароль"}
          value={passwordValue}
          setValue={setPasswordValue}
        />
        <MyInput
          type="text"
          placeholder={"Введите код из письма"}
          value={codeValue}
          setValue={setCodeValue}
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
