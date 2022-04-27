import { RefObject, useEffect, useRef } from "react";

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void
): void;

function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event
  ) => void,
  element?: RefObject<T>
) {
  const saveHandler = useRef(handler);

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: T | Window = element?.current || window;
    const isSupported = targetElement && targetElement.addEventListener;
    if (!isSupported) return;

    // 将 event 参数传入 ref 中的 handler
    const eventListener: typeof handler = (event) => saveHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, false);

    return () => {
      targetElement.removeEventListener(eventName, eventListener, false);
    };
  }, [element, eventName]);
}

export default useEventListener;
