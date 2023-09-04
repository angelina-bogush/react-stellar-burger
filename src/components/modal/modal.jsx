import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import ModalOverlay from './modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
const modal = document.getElementById('modal')
function Modal(props){
    const handleCloseModal = (e) => {
        console.log(e.target)
        props.onClose(false)
    }
    return ReactDOM.createPortal(
        <div className={styles.container}>
            <div className={styles.content}>
            <div onClick={handleCloseModal} className={styles.closeIcon}><CloseIcon type="primary" className={styles.closeIcon}/></div>
            {props.children}
            </div>
            <ModalOverlay onClose={handleCloseModal}></ModalOverlay>
        </div>, modal

    )
}
export default Modal