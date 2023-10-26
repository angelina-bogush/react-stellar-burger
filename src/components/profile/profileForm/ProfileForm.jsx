import styles from './ProfileForm.module.css'
import { MyInput } from "../../form/input/MyInput";
import { useState } from 'react';
export const ProfileForm = () => {
const [valueEmail, setValueEmail] = useState('mail@stellar.burgers')
const [valuePassword, setValuePassword] = useState('mail@stellar.burgers')
const [valueName, setValueName] = useState('Марк')

    return(
     <form className={styles.form}>
      <MyInput type="text" placeholder={"Имя"} input="email" value={valueName} setValue={setValueName}/>
      <MyInput type="email" placeholder={"Логин"} input={'email'} value={valueEmail} setValue={setValueEmail}/>
      <MyInput type="password" placeholder={"Пароль"} input='password' icon='EditIcon'
      value={valuePassword} setValue={setValuePassword}/>
    </form>
    )
}