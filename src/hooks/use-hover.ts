import { RefObject, useState } from "react";
import useEventListener from "./use-event-listener";

const useHover = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [value, setValue] = useState(false);

  useEventListener("mouseenter", () => setValue(true), ref);

  useEventListener("mouseleave", () => setValue(false), ref);

  return value;
};

export default useHover;
