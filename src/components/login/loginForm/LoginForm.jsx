import { Form } from "../../form/Form";
import { MyInput } from "../../form/input/MyInput";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { loginUserAction } from "../../../services/actions/login";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const handleLogin = (e) => {
    try{
    e.preventDefault();
    dispatch(loginUserAction(emailValue, passwordValue))
    navigate('/')
    } catch(error){
      console.log(error)
    }
  }
  const accessToken = useSelector(state => state.loginReducer.accessToken)
  console.log(accessToken)
  console.log(emailValue)
    return(

     <Form title='Вход' buttonText='Войти' onClick={(e) => handleLogin(e)}>
      <MyInput type="email" placeholder={"E-mail"} value={emailValue} setValue={setEmailValue}/>
      <MyInput type="password" placeholder={"Пароль"} icon={"ProfileIcon"} value={passwordValue} setValue={setPasswordValue}/>
    </Form>
    )
}