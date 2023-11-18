import styles from './FeedOrders.module.css'
import { FeedList } from '../feedList/FeedList'

export const FeedOrders = () => {
    return(
        <section className={styles.ordersContainer}>
          <div className={styles.feedListContainer}>
            <FeedList title='Готовы:' numbers={['04354', '374683', '645374', '4673846', '74686', '476386']} done/>
            <FeedList title='В работе:' numbers={['04354', '374683', '645374']} />
          </div>
          <div className={styles.doneOrders}>
            <p className="text text_type_main-medium">Выполнено за все время:</p>
            <p className={`text text_type_digits-large ${styles.shadow}`}>28752</p>
          </div>
          <div className={styles.doneOrders}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p className={`text text_type_digits-large ${styles.shadow}`}>138</p>
          </div>
        </section>
    )
}