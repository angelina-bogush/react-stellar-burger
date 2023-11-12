import styles from './Form.module.css'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

export const Form = ({title, buttonText, onClick, children}) => {

    return(
        <form className={styles.form}>
         <p className="text text_type_main-medium">{title}</p>
         {children}
        <Button htmlType="submit" type="primary" size="medium" onClick={onClick}>{buttonText}</Button>
    </form>
    )
}