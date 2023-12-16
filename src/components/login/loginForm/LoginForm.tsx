import { Form } from "../../form/Form";
import { MyInput } from "../../form/input/MyInput";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { loginUserAction } from "../../../services/actions/login";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleLogin = (e: FormEvent) => {
    try {
      e.preventDefault();
      dispatch(loginUserAction(emailValue, passwordValue, navigate));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form title="Вход" buttonText="Войти" onSubmit={handleLogin}>
      <MyInput
        type="email"
        input="email"
        placeholder={"E-mail"}
        value={emailValue}
        setValue={setEmailValue}
      />
      <MyInput
        type="password"
        input="password"
        placeholder={"Пароль"}
        // icon={"ProfileIcon"}
        value={passwordValue}
        setValue={setPasswordValue}
      />
    </Form>
  );
};
