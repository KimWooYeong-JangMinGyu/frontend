import { FC, SVGProps } from "react";

type SvgIconProps = {
  Svg: FC<SVGProps<SVGSVGElement>>,
  className?: string,
  width?: number|string,
  height?: number|string,
  fill?: string
}

const SvgIcon = (props: SvgIconProps) => {
  const {
    Svg,
    className,
    width,
    height,
    fill,
  } = props;

  return (
    <Svg
      className={className}
      width={width}
      height={height}
      fill={fill}
    />
  );
};

export default SvgIcon;