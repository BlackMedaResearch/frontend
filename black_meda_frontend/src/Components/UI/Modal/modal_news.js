import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div></div>;
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const portalID = document.getElementById("overlays ");

const modal_news = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalID)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalID)}
    </>
  );
};
export default modal_news;
