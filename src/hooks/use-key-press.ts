import { useState } from "react";
import useEventListener from "./use-event-listener";

const useKeyPress = (key: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = (e: KeyboardEvent) => {
    if (e.key === key) {
      setKeyPressed(true);
    }
  };

  const upHandler = (e: KeyboardEvent) => {
    if (e.key === key) {
      setKeyPressed(false);
    }
  };

  useEventListener("keydown", downHandler);
  useEventListener("keyup", upHandler);

  return keyPressed;
};

export default useKeyPress;
