import { IoIosArrowForward } from "react-icons/io";
import CommonButton from "../CommonButton";
import InputField from "../InputField";
import { useInput } from "../../hooks/InputHooks";
import "../../styles/StartNetflixComponent.scss";

const StartNetflixComponent = () => {
  const validator = (type: string, value: string): boolean => {
    let isValid: boolean = true;

    switch (type) {
      case "email": {
        const regexp: RegExp = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
        isValid = regexp.test(value);
        break;
      }
    }

    return isValid;
  };
  const { value, onChange, onBlur } = useInput({ type: "email", validator: validator });

  return (
    <div className="start-netflix-component">
      <div>
        <span className="white-1rem-regular">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</span>
      </div>
      <div className="email-container">
        <InputField
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label="이메일 주소"
          validaionMessage="이메일 주소는 반드시 입력하셔야 합니다."
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