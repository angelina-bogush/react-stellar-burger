import { RegistrationForm } from "../../components/registration/registrationForm/RegistrationForm";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './registrationPage.module.css'
export const RegistrationPage =  () => {
    return (
      <div className={styles.container}>
      <RegistrationForm/>
      <div className={styles.text}>
      <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
      <Button htmlType="button" type="secondary" size="medium">Войти</Button>
      </div>
      </div>
      );
}
