import styles from './ProfileForm.module.css'
import { MyInput } from "../../form/input/MyInput";
import { getUserInfo } from '../../../utils/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCookie } from '../../../utils/cookie';
export const ProfileForm = ({name, email}) => {
const [valueEmail, setValueEmail] = useState('')
const [valuePassword, setValuePassword] = useState('')
const [valueName, setValueName] = useState('')

useEffect(() => {
  const token = getCookie('accessToken')
 const getInfo = async () => {
  const data = await getUserInfo(token)
  setValueEmail(data.user.email)
  setValueName(data.user.name)
 }
 getInfo()
}, [])

    return(
     <form className={styles.form}>
      <MyInput type="text" placeholder={"Имя"} input="email" value={valueName} setValue={setValueName}/>
      <MyInput type="email" placeholder={"Логин"} input={'email'} value={valueEmail} setValue={setValueEmail}/>
      <MyInput type="password" placeholder={"Пароль"} input='password' icon='EditIcon'
      value={valuePassword} setValue={setValuePassword}/>
    </form>
    )
}