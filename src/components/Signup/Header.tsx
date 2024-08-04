import { ReactComponent as LogoSvg } from "../../assets/icons/logo.svg";
import SvgIcon from "../SvgIcon";

const Header = () => {
  return (
    <div className="header-container">
      <a href="/">
        <SvgIcon Svg={LogoSvg} width="9.25rem" height="2.5rem" fill="#e50914" />
      </a>
      <a href="/login">로그인</a>
    </div>
  );
};

export default Header;