import { useEffect, useRef } from "react";

type IProps = Record<string, any>;

const useWhyDidYouUpdate = (name: string, props: IProps) => {
  // 存放上一次的 props
  const previousProps = useRef<IProps>({});

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj: IProps = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }

    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;
