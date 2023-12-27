import styles from './FeedList.module.css'
import clsx from 'clsx'

interface IFeedListProps{
    title: string
    done?: boolean
    twoColumns?: boolean
    numbers: Array<number>
}

export const FeedList = ({title, numbers, done, twoColumns}: IFeedListProps) => {

    const stylesList = clsx(styles.list,{
        [styles.twoColumns]: twoColumns
    })

    return(
        <div className={styles.container}>
            <p className="text text_type_main-medium">{title}</p>
            <ul className={stylesList}>
                {numbers.map((number, index) => (
                <li key={index} className={done ? styles.number : ''}><p className="text text_type_digits-default">{number}</p></li>)
                )}
            </ul>
        </div>
    )
}