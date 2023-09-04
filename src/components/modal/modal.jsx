import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const modal = document.getElementById("modal");

function Modal(props) {
  const handleCloseModal = () => {
    props.onClose(false);
  };
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.content}>
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
