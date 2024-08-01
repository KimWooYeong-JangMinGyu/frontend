import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import "../styles/InputField.scss";
import SvgIcon from "./SvgIcon";
import { ReactComponent as CirCleXSvg } from "../assets/icons/circle-x.svg";
import { useInput } from "../hooks/InputField";

type InputFieldProps = {
  id: string,
  label: string,
  type?: HTMLInputTypeAttribute,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>,
  placeholder?: string,
  validator?: (type: string, value: string) => string,
};

const InputField = (props: InputFieldProps) => {
  const {
    id,
    label,
    type,
    placeholder,
    onChange: customOnChange,
    onFocus: customOnFocus,
    onBlur: customOnBlur,
    validator = () => "",
  } = props;

  const {
    inputGroupRef,
    value,
    onChange,
    onBlur,
    validationMessage,
  } = useInput({ id: id, validator: validator });

  return (
    <div
      ref={inputGroupRef}
      className="input-group"
    >
      <div className="input-container">
        <label className={`${value ? "inputed" : ""} input-label`}>{label}</label>
        <div className="input-field">
          <input
            type={type}
            value={value}
            onChange={customOnChange ?? onChange}
            onFocus={customOnFocus}
            onBlur={customOnBlur ?? onBlur}
            placeholder={placeholder}
            required
          />
        </div>
      </div>
      <div className="validation-message">
        <SvgIcon Svg={CirCleXSvg} width={16} height={16} />
        <span>{validationMessage}</span>
      </div>
    </div>
  );
};

export default InputField;
