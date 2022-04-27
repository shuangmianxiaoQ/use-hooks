import { useLayoutEffect } from "react";

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // 获取 body 的 overflow 值
    const originStyle = window.getComputedStyle(document.body).overflow;
    // 打开模态窗时设置 body 的 overflow（在 Modal 中使用）
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originStyle;
    };
  }, []);
};

export default useLockBodyScroll;
