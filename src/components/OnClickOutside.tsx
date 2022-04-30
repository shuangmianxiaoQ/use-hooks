import { CSSProperties, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";

const modalStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "100%",
  padding: "50px",
  textAlign: "center",
  fontSize: "1.2rem",
  backgroundColor: "white",
  boxShadow: "0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)"
};

const OnClickOutside = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div style={{ padding: "50px" }}>
      {isModalOpen ? (
        <div ref={ref} style={modalStyle}>
          <span role="img" aria-label="wave">
            👋
          </span>
          {` `}
          Hey, I'm a modal <br />
          <br /> Click anywhere outside of me to close
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
};

export default OnClickOutside;
