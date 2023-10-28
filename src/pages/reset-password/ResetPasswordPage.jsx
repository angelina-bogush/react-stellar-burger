import { useState } from 'react';
import styles from './RestPasswordPage.module.css'

export const ResetPasswordPage = () => {
    const [passwordValue, setPasswordValue] = useState('')
    const [codeValue, setCodeValue] = useState('')

    const resetPasswordClick = async(e) => {
        e.preventDefault()
        // const res = await
    }
    return (
        <div className={styles.container}>
      <Form title='Восстановление пароля' buttonText='Войти' onClick={(e) => resetPasswordClick(e)}>
        <MyInput input="password" placeholder={"Введите новый парол"} value={passwordValue} setValue={setPasswordValue}/>
        <MyInput type="number" placeholder={"Введите код из письма"} value={codeValue} setValue={setCodeValue}/>
      </Form>
      <TextWithLink text='Вспомнили пароль?' textLink='Войти' path={LOGIN_PATH}/>
        </div>
      );
}
