import { CSSProperties, memo, useState } from "react";
import { useWhyDidYouUpdate } from "../hooks";

const Counter = memo((props: { count: number; style: CSSProperties }) => {
  useWhyDidYouUpdate("Counter", props);
  return <div style={props.style}>{props.count}</div>;
});

const counterStyle = {
  fontSize: "3rem",
  color: "red"
};

const WhyDidYouUpdate = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  // const counterStyle = {
  //   fontSize: "3rem",
  //   color: "red"
  // };

  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div className="user">
        <img src={`http://i.pravatar.cc/80?img=${userId}`} />
        <button onClick={() => setUserId(userId + 1)}>Switch User</button>
      </div>
    </div>
  );
};

export default WhyDidYouUpdate;
