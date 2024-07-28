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

    setValue(value);
    checkValidator(e.target);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    checkValidator(e.target);
  };

  const checkValidator = (element: HTMLInputElement) => {
    const inputGroup = element.closest(".input-group");
    // const inputContainer = inputGroup?.querySelector(".input-container");
    // const validationMessage = inputGroup?.querySelector(".validation-message");

    // console.log(validationMessage);

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
      inputGroup?.classList.add("valid");
      inputGroup?.classList.remove("invalid");
    } else {
      inputGroup?.classList.remove("valid");
      inputGroup?.classList.add("invalid");
    }
  };

  return { value, onChange, onBlur };
};

export {
  useInput,
};
