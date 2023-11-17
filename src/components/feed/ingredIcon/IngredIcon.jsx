import styles from './IngredIcon.module.css'
import iconPath from '../../../images/icons/bun-01.svg'

export const IngredIcon = () => {

    return(
        <div className={styles.wrapper}>
            <img src={iconPath}></img>
        </div>
    )
}