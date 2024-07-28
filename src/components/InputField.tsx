import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import "../styles/InputField.scss";
import SvgIcon from "./SvgIcon";
import { ReactComponent as CirCleXSvg } from "../assets/icons/circle-x.svg";

type InputFieldProps = {
  label: string,
  type?: HTMLInputTypeAttribute,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>,
  placeholder?: string,
  validaionMessage?: string,
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
    validaionMessage,
  } = props;

  return (
    <div className="input-group">
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
      <div className="validation-message">
        <SvgIcon Svg={CirCleXSvg} width={16} height={16} />
        <span>{validaionMessage}</span>
      </div>
    </div>
  );
};

export default InputField;
