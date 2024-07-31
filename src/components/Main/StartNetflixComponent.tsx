import { IoIosArrowForward } from "react-icons/io";
import CommonButton from "../CommonButton";
import InputField from "../InputField";
import "../../styles/StartNetflixComponent.scss";

const StartNetflixComponent = () => {
  const validationMessageMap = {
    required_email: "이메일 주소는 반드시 입력하셔야 합니다.",
    invalid_email: "정확한 이메일 주소나 전화번호를 입력하세요.",
  };
  const validator = (id: string, value: string): string => {
    let result: string = "";

    switch (id) {
      case "email": {
        const regexp: RegExp = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");

        if (!value) {
          result = "required_email";
        } else if (!regexp.test(value)) {
          result = "invalid_email";
        }
        break;
      }
    }

    return result;
  };

  return (
    <div className="start-netflix-component">
      <div>
        <span className="white-1rem-regular">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</span>
      </div>
      <div className="email-container">
        <InputField
          id="email"
          label="이메일 주소"
          validator={validator}
          validationMessageMap={validationMessageMap}
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