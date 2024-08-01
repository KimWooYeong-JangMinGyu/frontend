import { IoIosArrowForward } from "react-icons/io";
import CommonButton from "../CommonButton";
import InputField from "../InputField";
import "../../styles/StartNetflixComponent.scss";
import StartNetflixValidator from "../../validators/StartNetflixValidator";

const StartNetflixComponent = () => {
  return (
    <div className="start-netflix-component">
      <div>
        <span className="white-1rem-regular">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</span>
      </div>
      <div className="email-container">
        <InputField
          id="email"
          label="이메일 주소"
          validator={StartNetflixValidator}
        />
        <CommonButton className="start-button">
          <span>
            시작하기
            <IoIosArrowForward />
          </span>
        </CommonButton>
      </div>
    </div>
  );
};

export default StartNetflixComponent;