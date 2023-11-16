import { MyInput } from "../../form/input/MyInput";
import { Form } from "../../form/Form";
import { useState } from "react";
import { registerUser } from "../../../services/actions/register";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../../app/router/config/routes";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerUser(emailValue, passwordValue, nameValue));
    navigate(LOGIN_PATH);
  };

  return (
    <Form
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onSubmit={(e) => handleRegister(e)}
    >
      <MyInput
        type="text"
        placeholder={"Имя"}
        value={nameValue}
        setValue={setNameValue}
      />
      <MyInput
        type="email"
        placeholder={"E-mail"}
        value={emailValue}
        setValue={setEmailValue}
      />
      <MyInput
        type="password"
        placeholder={"Пароль"}
        icon={"ProfileIcon"}
        value={passwordValue}
        setValue={setPasswordValue}
      />
    </Form>
  );
};
