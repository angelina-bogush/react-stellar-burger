import styles from './profileNav.module.css'
import { logoutAction } from '../../../services/actions/logout';
import { LOGIN_PATH } from '../../../app/router/config/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export const ProfileNav = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const refresh = localStorage.getItem('refresh')
    const handleLogout = async () => {
        try {
          await dispatch(logoutAction(refresh));
          navigate(LOGIN_PATH);
        } catch (error) {
          console.error(error);
        }
      }
    return(
        <div className={styles.navigation}>
            <a className={styles.link}><p className='text text_type_main-medium'>Профиль</p></a>
           <a className={styles.link}> <p className='text text_type_main-medium text_color_inactive'>История заказов</p></a>
            <a className={styles.link} onClick={handleLogout}><p className='text text_type_main-medium text_color_inactive'>Выход</p></a>
            <p className={`${styles.description} text text_type_main-small`}>В этом разделе вы можете
изменить свои персональные данные</p>
        </div>
    )
}