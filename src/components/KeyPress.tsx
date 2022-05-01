import { useKeyPress } from "../hooks";

const KeyPress = () => {
  const happyPress = useKeyPress("h");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");

  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
};

export default KeyPress;
