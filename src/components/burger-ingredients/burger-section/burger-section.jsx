import styles from './burger-section.module.css'
const BurgerSection = (props) => {
    return (
      <div className={styles.container}>
        <h2 className="text text_type_main-medium">{props.title}</h2>
        <div className={styles.layout}>
            {props.children}
        </div>
      </div>
    );

}

export default BurgerSection