import { ChangeEvent, FocusEvent, useState } from "react";

type UseInputParams = {
  type: string,
  validator?: ((type: string, value: string) => boolean) | boolean,
};

type UseInputReturnType = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: FocusEvent<HTMLInputElement>) => void,
};

const useInput = (params: UseInputParams): UseInputReturnType => {
  const {
    type,
    validator,
  } = params;
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const inputContainer = e.target.closest(".input-container");

    let isValid: boolean = true;

    switch (typeof validator) {
      case "function":
        isValid = validator(type, value)!;
        break;
      case "boolean":
        isValid = validator;
        break;
    }

    if (isValid) {
      inputContainer?.classList.add("valid");
      inputContainer?.classList.remove("invalid");
    } else {
      inputContainer?.classList.remove("valid");
      inputContainer?.classList.add("invalid");
    }

    setValue(value);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    let isValid: boolean = true;
    const inputContainer = e.target.closest(".input-container");

    switch (typeof validator) {
      case "function":
        isValid = validator(type, value)!;
        break;
      case "boolean":
        isValid = validator;
        break;
    }

    if (isValid) {
      inputContainer?.classList.add("valid");
      inputContainer?.classList.remove("invalid");
    } else {
      inputContainer?.classList.remove("valid");
      inputContainer?.classList.add("invalid");
    }
  };

  return { value, onChange, onBlur };
};

export {
  useInput,
};
