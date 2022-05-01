import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "ready" | "error";

const useScript = (src: string) => {
  const [status, setStatus] = useState<Status>(src ? "loading" : "idle");

  useEffect(() => {
    if (!src) {
      setStatus("idle");
      return;
    }

    // 查找是否已添加过该 script，避免重复添加
    const script = document.querySelector(`script[src="${src}"]`);

    // 单例模式
    if (!script) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      script.onload = () => {
        script.setAttribute("data-status", "ready");
        setStatus("ready");
      };

      script.onerror = () => {
        script.setAttribute("data-status", "error");
        setStatus("error");
      };
    } else {
      setStatus(script.getAttribute("data-status") as Status);
    }
  }, [src]);

  return status;
};

export default useScript;
