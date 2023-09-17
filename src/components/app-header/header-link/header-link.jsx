import PropTypes from 'prop-types';
import styles from './header-link.module.css';
function HeaderLink(props) {
  return (
    <a className={`${styles.headerLink} pl-5 pr-5 pb-5 pt-5`}>
      {props.children}
    </a>
  );
}
HeaderLink.propTypes = {
  children: PropTypes.node.isRequired
}
export default HeaderLink;
