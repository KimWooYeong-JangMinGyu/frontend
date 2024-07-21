import { MouseEventHandler, ReactNode } from "react";
import "../styles/CommonButton.scss";

type CommonButtonProps = {
  children?: ReactNode,
  className?: string,
  onclick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

const CommonButton = (props: CommonButtonProps) => {
  const {
    children,
    className,
    onclick,
  } = props;

  return (
    <button
      className={`common-button ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default CommonButton;
