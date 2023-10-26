import styles from './ForgotPasswordPage.module.css'
import { Form } from '../../components/form/Form';
import { MyInput } from '../../components/form/input/MyInput';
import { LOGIN_PATH } from '../../app/router/config/routes';
import { TextWithLink } from '../../components/form/textWithLink/TextWithLink';

export const ForgotPasswordPage =  () => {
    return (
        <div className={styles.container}>
      <Form title='Восстановление пароля' buttonText='Восстановить'>
        <MyInput type="email" placeholder={"Укажите e-mail"}/>
      </Form>
      <TextWithLink text='Вспомнили пароль?' textLink='Войти' path={LOGIN_PATH}/>
        </div>
      );
}