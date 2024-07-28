import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import "../styles/InputField.scss";

type InputFieldProps = {
  label?: string,
  type?: HTMLInputTypeAttribute,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>,
  placeholder?: string,
};

const InputField = (props: InputFieldProps) => {
  const {
    label,
    type,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
  } = props;

  return (
    <div className="input-container">
      <label className={`${value ? "inputed" : ""} input-label`}>{label}</label>
      <div className="input-field">
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
