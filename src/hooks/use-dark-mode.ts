import { useEffect } from "react";
import useLocalStorage from "./use-local-storage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean | undefined>(
    "dark-mode-enabled",
    undefined
  );

  // 检查系统是否支持深色模式
  const perfersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;

  const enabled = enabledState !== undefined ? enabledState : perfersDarkMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState] as const;
};

export default useDarkMode;
