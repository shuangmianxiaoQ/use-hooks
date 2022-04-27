import { useCallback, useState } from "react";
import { useEventListener } from "../hooks";

const EventListener = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);

  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
};

export default EventListener;
