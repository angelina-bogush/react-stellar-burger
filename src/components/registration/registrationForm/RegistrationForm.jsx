import { MyInput } from "../../form/input/MyInput"
import { Form } from "../../form/Form";
import { useState } from "react";
import { registerUser } from "../../../services/actions/register";
import { useSelector, useDispatch } from "react-redux";

export const RegistrationForm = () => {
  const dispatch = useDispatch()
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(registerUser(emailValue, passwordValue, nameValue))
  }
  const email = useSelector(state => state.registrationReducer.email)
  console.log(localStorage.getItem('refresh'))
  return (
    <Form title='Регистрация' buttonText='Зарегистрироваться' onClick={(e) => handleRegister(e)}>
      <MyInput type="text" placeholder={"Имя"} value={nameValue} setValue={setNameValue}/>
      <MyInput type="email" placeholder={"E-mail"} value={emailValue} setValue={setEmailValue}/>
      <MyInput type="password" placeholder={"Пароль"} icon={"ProfileIcon"} value={passwordValue} setValue={setPasswordValue}/>
    </Form>
  );
};