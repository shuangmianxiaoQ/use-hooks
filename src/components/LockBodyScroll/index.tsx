import { useState } from "react";
import Content from "./Content";
import Modal from "./Modal";
import "./styles.scss";

const LockBodyScroll = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      <Content />
      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default LockBodyScroll;
