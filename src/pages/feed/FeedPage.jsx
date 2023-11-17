import styles from './FeedPage.module.css'
import { FeedCard } from '../../components/feed/feedCard/FeedCard'

export const FeedPage = () => {

    return (
      <div className={styles.pageContainer}>
        <p className="text text_type_main-large">Лента заказов</p>
        <div className={styles.content}>
          <section className={`${styles.cardContainer} custom-scroll`}>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </section>
        </div>
      </div>
    );
}