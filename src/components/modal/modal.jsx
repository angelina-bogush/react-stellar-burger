import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useCallback } from "react";
const modal = document.getElementById("modal");

function Modal(props) {
  const handleCloseModal = useCallback(() => {
    props.onClose(false);
  }, [props.onClose]);
  

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleCloseModal]);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={`${styles.title} text text_type_main-large pb-3 pt-3`}>{props.title}</h2>
        <div onClick={handleCloseModal} className={styles.closeIcon}>
          <CloseIcon type="primary" className={styles.closeIcon} />
        </div>
        {props.children}
      </div>
      <ModalOverlay onClose={handleCloseModal}></ModalOverlay>
    </div>,
    modal
  );
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
