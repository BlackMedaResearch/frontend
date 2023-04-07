import ReactDOM from "react-dom";
import styles from "./ModalNews.module.css";
import CheckButton from "../helpers/Buttons/CheckButton";
import { searchActions } from "../../../store";
import { useDispatch } from "react-redux";




const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <CheckButton onClose={props.close} />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalID = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalID)}
      {ReactDOM.createPortal(
        <ModalOverlay close={props.onClose}>{props.children}</ModalOverlay>,
        portalID
      )}
    </>
  );
};
export default Modal;
