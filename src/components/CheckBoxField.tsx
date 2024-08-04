import { ReactNode } from "react";
import "../styles/CheckBoxField.scss";

type CheckBoxFieldProps = {
  id: string,
  children?: ReactNode,
};

const CheckBoxField = (props: CheckBoxFieldProps) => {
  const {
    id,
    children,
  } = props;

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default CheckBoxField;
