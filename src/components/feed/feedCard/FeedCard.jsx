import styles from './FeedCard.module.css'
import { IngredIcon } from '../ingredIcon/IngredIcon'

export const FeedCard = () => {

    return(
        <div className={styles.card}>
            <span className={styles.header}>
            <p className="text text_type_digits-default">#034535</p>
            <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
            </span>
            <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
            <div className={styles.footer}>
                <div className={styles.iconsWrapper}>
                <IngredIcon/>
                <IngredIcon/>
                <IngredIcon/>
                </div>
                <div>
                    <p className="text text_type_digits-default">480</p>
                </div>
            </div>

        </div>
    )
}