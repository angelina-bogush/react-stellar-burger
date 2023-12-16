import styles from "./modal-overlay.module.css";

type TOverlayProps = {
  onClose: () => void
}

function ModalOverlay({ onClose }: TOverlayProps) {
  return <div onClick={onClose} className={styles.overlay}></div>;
}
export default ModalOverlay;
