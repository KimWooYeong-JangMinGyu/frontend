import checkmark from "../../assets/images/Checkmark.png";
import SvgIcon from "../SvgIcon";
import { ReactComponent as CheckSvg } from "../../assets/icons/check.svg";

const MemberShip = () => {
  return (
    <div className="body-container membership">
      <div className="body-inner">
        <img className="step-logo" src={checkmark} />
        <span className="step">2/3단계</span>
        <span className="title">원하는 멤버십을 선택하세요.</span>
        <div className="check-list">
          <ul>
            <li>
              <SvgIcon Svg={CheckSvg} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;