import { useLockBodyScroll } from "../../hooks";

type Props = {
  title: string;
  content: string;
  onClose?: () => void;
};

const Modal = ({ title, content, onClose }: Props) => {
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
