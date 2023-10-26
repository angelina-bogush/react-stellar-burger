import { MyInput } from "../../form/input/MyInput"
import { Form } from "../../form/Form";

export const RegistrationForm = () => {
  return (
    <Form title='Регистрация' buttonText='Зарегистрироваться'>
      <MyInput type="text" placeholder={"Имя"} />
      <MyInput type="email" placeholder={"E-mail"} />
      <MyInput type="password" placeholder={"Пароль"} icon={"ProfileIcon"} />
    </Form>
  );
};