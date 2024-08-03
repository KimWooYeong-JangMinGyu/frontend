import { useEffect, useState } from "react";

type useLocalStorageParams = {
  key: string,
  defaultValue: string
};

const useLocalStorage = (props: useLocalStorageParams) => {
  const {
    key,
    defaultValue,
  } = props;

  const [value, setValue] = useState(() => {
    return window.localStorage.getItem(key) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value]);

  return { value, setValue };
};

export default useLocalStorage;