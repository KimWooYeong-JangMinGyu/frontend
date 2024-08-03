import { ChangeEvent, FocusEvent, useEffect, useState } from "react";

type UseInputParams = {
  id: string,
  initValue?: string,
  validator?: (id: string, value: string) => string,
};

type UseInputReturnType = {
  value: string,
  status: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur: (e: FocusEvent<HTMLInputElement>) => void,
  validationMessage: string,
};

const useInput = (params: UseInputParams): UseInputReturnType => {
  const {
    id,
    initValue,
    validator = () => "",
  } = params;
  const [value, setValue] = useState(initValue ?? "");
  const [status, setStatus] = useState("");
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
        setStatus("invalid");
        break;
      case "valid":
        setStatus("valid");
        break;
      case "reset":
        setStatus("");
    }
  };

  useEffect(() => {
    if (initValue) {
      checkValidator();
    }
  }, [initValue]);

  return { value, status, onChange, onBlur, validationMessage };
};

export default useInput;
