import { ChangeEvent, useState } from "react";

type UseInputParams = {
  validator?: (value: string) => boolean | boolean,
};

type UseInputReturnType = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
};

const useInput = (params: UseInputParams = {}): UseInputReturnType => {
  const {
    validator,
  } = params;
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    let isValid: boolean = true;

    switch (typeof validator) {
      case "function":
        isValid = validator(value)!;
        break;
      case "boolean":
        isValid = validator;
        break;
    }

    if (isValid) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export {
  useInput,
};
