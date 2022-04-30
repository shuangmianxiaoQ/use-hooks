import { RefObject, useEffect } from "react";
import useEventListener from "./use-event-listener";

type Handler = (event: MouseEvent | TouchEvent) => void;

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  hander: Handler
) => {
  const listener = (event: MouseEvent | TouchEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return;
    }
    hander(event);
  };

  // 监听 mousedown 事件
  useEventListener("mousedown", listener);
  useEventListener("touchstart", listener);
};

export default useOnClickOutside;
