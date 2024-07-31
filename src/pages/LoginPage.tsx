import SvgIcon from "../components/SvgIcon";
import { ReactComponent as LogoSvg } from "../assets/icons/logo.svg";
import "../styles/LoginPage.scss";
import InputField from "../components/InputField";
import CommonButton from "../components/CommonButton";
import CheckBoxField from "../components/CheckBoxField";

const LoginPage = () => {
  const validationMessageMap = {
    required_email: "정확한 이메일 주소나 전화번호를 입력하세요.",
    invalid_email: "정확한 이메일 주소를 입력하세요.",
    invalid_password: "비밀번호는 4~60자 사이여야 합니다.",
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
      case "password":
        if (!value || value.length > 60 || value.length < 4) {
          result = "invalid_password";
        }
        break;
    }

    return result;
  };

  return (
    <div className="login-page">
      <div className="img-container">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/07c4fab7-5551-448b-bc2c-5cc27de3f443/KR-ko-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_d7a9338e-6a75-445b-bba6-0cadac28c8c4_small.jpg" />
        <div className="img-blur" />
      </div>
      <div className="header">
				<div className="header-container">
          <a href="/">
            <SvgIcon Svg={LogoSvg} width="9.25rem" height="2.5rem" fill="red" />
          </a>
				</div>
			</div>
			<div className="body">
        <div className="login-container">
          <div className="login-inner">
            <h1>로그인</h1>
            <div className="login-form">
              <InputField
                id="email"
                label="이메일 주소"
                validator={validator}
                validationMessageMap={validationMessageMap}
              />
              <InputField
                id="password"
                type="password"
                label="비밀번호"
                validator={validator}
                validationMessageMap={validationMessageMap}
              />
              <CommonButton className="login-button">
                <span>로그인</span>
              </CommonButton>
              <p className="or-text">또는</p>
              <CommonButton className="login-code-button">
                <span>로그인 코드 사용하기</span>
              </CommonButton>
              <a href="#" className="forget-password-link">비밀번호를 잊으셨나요?</a>
            </div>
            <div className="login-footer">
              <CheckBoxField
                id="save-login-info"
                label="로그인 정보 저장"
              />
              <p>
                Netflix 회원이 아닌가요?&nbsp;
                <a href='/'>지금 가입하세요.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-inner">
          <span>
            질문이 있으신가요? 문의 전화: &nbsp;<a href="tel:00-308-321-0161 (수신자 부담)">00-308-321-0161 (수신자 부담)</a>
          </span>

          <div className="footer-link-group">
            <a href="#">자주 묻는 질문</a>
            <a href="#">고객 센터</a>
            <a href="#">이용 약관</a>
            <a href="#">개인정보 처리방침</a>
            <a href="#">쿠키 설정</a>
            <a href="#">회사 정보</a>
          </div>

          <div className="copyright-group">
            <span>넷플릭스 대한민국</span>

            <p>
              넷플릭스서비스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)<br />
              대표: 레지널드 숀 통프슨<br />
              이메일 주소: korea@netflix.com<br />
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br />
              사업자등록번호: 165-87-00119<br />
              클라우드 호스팅: Amazon Web Service Inc.<br />
              <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">공정거래위원회 웹사이트</a><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
