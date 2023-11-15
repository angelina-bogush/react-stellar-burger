import { RegistrationForm } from "../../components/registration/registrationForm/RegistrationForm";
import { LOGIN_PATH } from "../../app/router/config/routes";
import styles from './RegistrationPage.module.css'
import { TextWithLink } from "../../components/form/textWithLink/TextWithLink";

export const RegistrationPage =  () => {
    return (
      <div className={styles.container}>
        <RegistrationForm/>
        <TextWithLink
          text="Уже зарегистрированы?"
          textLink="Войти"
          path={LOGIN_PATH}
        />
      </div>
    );
}
