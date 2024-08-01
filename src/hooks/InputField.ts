import { ChangeEvent, FocusEvent, RefObject, useRef, useState } from "react";

type UseInputParams = {
  id: string,
  validator?: (id: string, value: string) => string,
};

type UseInputReturnType = {
  inputGroupRef: RefObject<HTMLDivElement>,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: FocusEvent<HTMLInputElement>) => void,
  validationMessage: string,
};

const useInput = (params: UseInputParams): UseInputReturnType => {
  const {
    id,
    validator = () => "",
  } = params;
  const inputGroupRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
    changeInputStatus("reset");
  };

  // focus out
  const onBlur = () => {
    checkValidator();
  };

  const checkValidator = () => {
    const result: string = validator(id, value);

    if (result) {
      changeInputStatus("invalid", result);
    } else if (value) {
      changeInputStatus("valid", result);
    }
  };

  const changeInputStatus = (mode: string, result: string = "") => {
    setValidationMessage(result);

    switch (mode) {
      case "invalid":
        inputGroupRef.current?.classList.add("invalid");
        inputGroupRef.current?.classList.remove("valid");
        break;
      case "valid":
        inputGroupRef.current?.classList.add("valid");
        inputGroupRef.current?.classList.remove("invalid");
        break;
      case "reset":
        inputGroupRef.current?.classList.remove("valid");
        inputGroupRef.current?.classList.remove("invalid");
    }
  };

  return { inputGroupRef, value, onChange, onBlur, validationMessage };
};

export {
  useInput,
};
