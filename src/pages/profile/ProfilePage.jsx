import styles from './ProfilePage.module.css'
import { createUser } from '../../utils/api/api'
import { ProfileForm } from '../../components/profile/profileForm/ProfileForm'
import { logoutAction } from '../../services/actions/logout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '../../app/router/config/routes'

export const ProfilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
        <div className={styles.pageContainer}>
        <div className={styles.navigation}>
            <a className={styles.link}><p className='text text_type_main-medium'>Профиль</p></a>
           <a className={styles.link}> <p className='text text_type_main-medium text_color_inactive'>История заказов</p></a>
            <a className={styles.link} onClick={handleLogout}><p className='text text_type_main-medium text_color_inactive'>Выход</p></a>
            <p className={`${styles.description} text text_type_main-small`}>В этом разделе вы можете
изменить свои персональные данные</p>
        </div>
        <ProfileForm/>

        </div>
    )
}