import { ReactComponent as LogoSvg } from "../assets/icons/logo.svg";

type LogoPorps = {
  width?: number|string,
  height?: number|string,
}

const Logo = (props: LogoPorps) => {
  const {
    width = "9.25rem",
    height = "2.5rem",
  } = props;

  return (
    <LogoSvg
      width={width}
      height={height}
      fill="red"
    />
  );
};

export default Logo;
