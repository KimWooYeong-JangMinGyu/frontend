import { useNavigate } from "react-router-dom";
import deviceLogo from "../../assets/images/devices.png";
import CommonButton from "../CommonButton";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="body-container registration">
      <div className="body-inner">
        <img className="step-logo" src={deviceLogo} />
        <span className="step">1/3단계</span>
        <span className="title">계정 설정 마무리하기</span>
        <p className="content">
          맞춤형 콘텐츠 서비스, 넷플릭스!<br />
          비밀번호를 설정하고 넷플릭스를<br />
          시청하세요.
        </p>
        <CommonButton
          className="next-button"
          onclick={() => navigate("/signup/regform")}
        >
          <span>다음</span>
        </CommonButton>
      </div>
    </div>
  );
};

export default Registration;