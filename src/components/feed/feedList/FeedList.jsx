import styles from './FeedList.module.css'

export const FeedList = ({title, numbers, done}) => {

    return(
        <div className={styles.container}>
            <p className="text text_type_main-medium">{title}</p>
            <ul className={styles.list}>
                {numbers.map((number) => (
                <li className={done ? styles.number : ''}><p className="text text_type_digits-default">{number}</p></li>)
                )}
            </ul>
        </div>
    )
}