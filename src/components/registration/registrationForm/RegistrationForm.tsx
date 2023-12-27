import { MyInput } from "../../form/input/MyInput";
import { Form } from "../../form/Form";
import { FormEvent, useState } from "react";
// import { registerUser } from "../../../services/actions/register";
import { useDispatch } from "../../../services/store/store.types";
import { createUser } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../../app/router/config/routes";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const data = await createUser(emailValue, passwordValue,  nameValue);
    // dispatch(registerUser(emailValue, passwordValue, nameValue));
    navigate(LOGIN_PATH);
  };

  return (
    <Form
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onSubmit={handleRegister}
    >
      <MyInput
        type="text"
        input='text'
        placeholder={"Имя"}
        value={nameValue}
        setValue={setNameValue}
      />
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
        value={passwordValue}
        setValue={setPasswordValue}
      />
    </Form>
  );
};
