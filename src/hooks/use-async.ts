import { useCallback, useEffect, useState } from "react";

type Status = "idle" | "pending" | "success" | "error";

const useAsync = <T, E = string>(
  service: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<Status>("idle");
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus("pending");

    service()
      .then((res) => {
        setStatus("success");
        setValue(res);
      })
      .catch((error) => {
        setStatus("error");
        setError(error);
      });
  }, [service]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return { execute, status, value, error };
};

export default useAsync;
