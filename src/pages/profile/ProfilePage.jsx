import styles from './ProfilePage.module.css'
import { ProfileForm } from '../../components/profile/profileForm/ProfileForm'
export const ProfilePage = () => {

    return(
        <div className={styles.pageContainer}>
        <div className={styles.navigation}>
            <p className='text text_type_main-medium'>Профиль</p>
            <p className='text text_type_main-medium text_color_inactive'>История заказов</p>
            <p className='text text_type_main-medium text_color_inactive'>Выход</p>
            <p className={`${styles.description} text text_type_main-small`}>В этом разделе вы можете
изменить свои персональные данные</p>
        </div>
        <ProfileForm/>

        </div>
    )
}