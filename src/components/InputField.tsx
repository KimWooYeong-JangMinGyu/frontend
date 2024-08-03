import { ChangeEventHandler, FocusEventHandler, ForwardedRef, forwardRef, HTMLInputTypeAttribute } from "react";
import "../styles/InputField.scss";
import SvgIcon from "./SvgIcon";
import { ReactComponent as CirCleXSvg } from "../assets/icons/circle-x.svg";
import useInput from "../hooks/InputField";

type InputFieldProps = {
  id: string,
  label: string,
  type?: HTMLInputTypeAttribute,
  placeholder?: string,
  initValue?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>,
  validator?: (type: string, value: string) => string,
};

const InputField = forwardRef((props: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    id,
    label,
    type,
    placeholder,
    initValue,
    onChange: customOnChange,
    onFocus: customOnFocus,
    onBlur: customOnBlur,
    validator = () => "",
  } = props;

  const {
    value,
    status,
    onChange,
    onBlur,
    validationMessage,
  } = useInput({ id: id, initValue: initValue, validator: validator });

  return (
    <div
      className={`input-group ${status}`}
    >
      <div className="input-container">
        <label className={`${value ? "inputed" : ""} input-label`}>{label}</label>
        <div className="input-field">
          <input
            ref={ref}
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
});

InputField.displayName = "InputField";

export default InputField;
