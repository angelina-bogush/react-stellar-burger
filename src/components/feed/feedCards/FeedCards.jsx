import styles from './FeedCards.module.css'
import { FeedCard } from '../feedCard/FeedCard'

export const FeedCards = ({type}) => {
    return(
        <section className={`${styles.cardContainer} custom-scroll`}>
        <FeedCard type={type}/>
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