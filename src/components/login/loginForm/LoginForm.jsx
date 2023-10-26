import { Form } from "../../form/Form";
import { MyInput } from "../../form/input/MyInput";
export const LoginForm = () => {

    return(

     <Form title='Вход' buttonText='Войти'>
      <MyInput type="email" placeholder={"E-mail"} />
      <MyInput type="password" placeholder={"Пароль"} icon={"ProfileIcon"} />
    </Form>
    )
}