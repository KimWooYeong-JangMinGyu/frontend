import { MouseEventHandler, ReactNode } from "react";
import "../styles/CommonButton.scss";

type CommonButtonProps = {
  type?: "submit" | "reset" | "button" | undefined
  children?: ReactNode,
  className?: string,
  onclick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

const CommonButton = (props: CommonButtonProps) => {
  const {
    type = "button",
    children,
    className,
    onclick,
  } = props;

  return (
    <button
      type={type}
      className={`common-button ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default CommonButton;
