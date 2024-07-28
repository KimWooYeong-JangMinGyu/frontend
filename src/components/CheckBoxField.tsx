import "../styles/CheckBoxField.scss";

type CheckBoxFieldProps = {
  id: string,
  label: string,
};

const CheckBoxField = (props: CheckBoxFieldProps) => {
  const {
    id,
    label,
  } = props;

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBoxField;
