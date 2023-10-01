import styles from './burger-section.module.css';
import PropTypes from 'prop-types';
const BurgerSection = ({title, children}) => {
    return (
      <div className={styles.container}>
        <h2 className="text text_type_main-medium">{title}</h2>
        <div className={styles.layout}>
            {children}
        </div>
      </div>
    );

}
BurgerSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired

}
export default BurgerSection