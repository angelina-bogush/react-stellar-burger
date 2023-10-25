import { MyInput } from "./input/MyInput"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './registrationForm.module.css'

export const RegistrationForm = () => {
    return(
    <form className={styles.form}>
            <p className="text text_type_main-medium">Регистрация</p>
        <MyInput
        type='text'
        placeholder={'Имя'}
        />
         <MyInput
        type='email'
        placeholder={'E-mail'}
        />
         <MyInput
        type='password'
        placeholder={'Пароль'}
        icon={'ProfileIcon'}
        />
        <Button htmlType="submit" type="primary" size="medium">Зарегистрироваться</Button>
    </form>
    )
}