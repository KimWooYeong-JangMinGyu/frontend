import checkmark from "../../assets/images/Checkmark.png";
import SvgIcon from "../SvgIcon";
import { ReactComponent as CheckSvg } from "../../assets/icons/check.svg";
import { useNavigate } from "react-router-dom";
import CommonButton from "../CommonButton";

const Membership = () => {
  const navigate = useNavigate();

  return (
    <div className="body-container membership">
      <div className="body-inner">
        <img className="step-logo" src={checkmark} />
        <span className="step">2/3단계</span>
        <span className="title">원하는 멤버십을 선택하세요.</span>
        <div className="check-list">
          <ul>
            <li className="check-row">
              <SvgIcon className="check-icon" Svg={CheckSvg} />
              <div>
                <span className="check-text">無약정, 無위약금. 해지도 쿨하게</span>
                <span className="check-text">언제든지.</span>
              </div>
            </li>
            <li className="check-row">
              <SvgIcon className="check-icon" Svg={CheckSvg} />
              <div>
                <span className="check-text">하나의 요금으로 즐기는 끝없는</span>
                <span className="check-text">콘텐츠의 세계.</span>
              </div>
            </li>
            <li className="check-row">
              <SvgIcon className="check-icon" Svg={CheckSvg} />
              <div>
              <span className="check-text">가지고 계신 모든 디바이스에서</span>
              <span className="check-text">넷플릭스를 즐겨보세요.</span>
              </div>
            </li>
          </ul>
        </div>

        <CommonButton className="next-button" onclick={() => navigate("/signup/membershipform")}>
          <span>다음</span>
        </CommonButton>
      </div>
    </div>
  );
};

export default Membership;