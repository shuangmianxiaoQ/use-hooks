import useToggle from "../hooks/use-toggle";

const Toggle = () => {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? "Toggled" : "Click to Toggle"}
    </button>
  );
};

export default Toggle;
