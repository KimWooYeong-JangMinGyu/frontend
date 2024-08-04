import useRegform from "../../hooks/Regform";
import RegformValidator from "../../validators/RegformValidator";
import CheckBoxField from "../CheckBoxField";
import CommonButton from "../CommonButton";
import InputField from "../InputField";

const Regform = () => {
  const  { email, nextStep } = useRegform();

  return (
    <div className="body-container regform">
      <div className="body-inner">
        <span className="step">1/3단계</span>
        <span className="title">비밀번호를 설정해 멤버십을 시작하세요</span>
        <p className="content">
          몇 단계만 더 거치면 넷플릭스 가입 완료!<br />
          복잡한 단계는 모두 없앴습니다.
        </p>

        <form>
          <InputField
            id="email"
            label="이메일 주소"
            validator={RegformValidator}
            initValue={email}
          />
          <InputField
            id="password"
            type="password"
            label="비밀번호"
            validator={RegformValidator}
          />
          {/* TODO : 체크박스 유효성 검사 추가 */}
          <CheckBoxField id="personal-info">
            <span>
              예, 저는&nbsp;
              <a href="https://help.netflix.com/legal/privacy">개인정보 처리방침</a>에 따른 개인정보 수집 및<br />
              활용에 동의합니다.&nbsp;<a href="https://help.netflix.com/legal/kr-processing-details">(상세정보)</a>
            </span>
          </CheckBoxField>
          <CheckBoxField id="notification-info">
            <span>
              예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)
            </span>
          </CheckBoxField>

          <CommonButton
            className="next-button"
            onclick={nextStep}
          >
            <span>다음</span>
          </CommonButton>
        </form>
      </div>
    </div>
  );
};

export default Regform;