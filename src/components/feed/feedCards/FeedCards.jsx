import styles from './FeedCards.module.css'
import { FeedCard } from '../feedCard/FeedCard'

export const FeedCards = () => {
    return(
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
    )
}