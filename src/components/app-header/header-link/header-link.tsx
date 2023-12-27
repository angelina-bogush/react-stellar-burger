import PropTypes from "prop-types";
import {  FC } from "react";
import styles from "./header-link.module.css";
export const  HeaderLink: FC = (props) => {
  return (
    <span className={`${styles.headerLink} pl-5 pr-5 pb-5 pt-5`}>
      {props.children}
    </span>
  );
}
HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HeaderLink;
