import styles from './FeedCards.module.css'
import { FeedCard } from '../feedCard/FeedCard'

export const FeedCards = ({type, orders}) => {
    return(
        <section className={`${styles.cardContainer} custom-scroll`}>
          {orders.map((order) => (
        <FeedCard type={type} order={order}/>
          ))}
      </section>
    )
}