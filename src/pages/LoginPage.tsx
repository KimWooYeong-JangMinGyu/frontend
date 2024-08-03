import SvgIcon from "../components/SvgIcon";
import { ReactComponent as LogoSvg } from "../assets/icons/logo.svg";
import "../styles/LoginPage.scss";
import InputField from "../components/InputField";
import CommonButton from "../components/CommonButton";
import CheckBoxField from "../components/CheckBoxField";
import LogintValidator from "../validators/LoginValidator";
import { FormEvent } from "react";

const LoginPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    // TODO : input field 상태를 확인
    event.preventDefault();
    console.log("submit");
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
            <form
              className="login-form"
              onSubmit={onSubmit}
            >
              <InputField
                id="email"
                label="이메일 주소"
                validator={LogintValidator}
              />
              <InputField
                id="password"
                type="password"
                label="비밀번호"
                validator={LogintValidator}
              />
              <CommonButton
                type="submit"
                className="login-button"
              >
                <span>로그인</span>
              </CommonButton>
              <p className="or-text">또는</p>
              <CommonButton className="login-code-button">
                <span>로그인 코드 사용하기</span>
              </CommonButton>
              <a href="#" className="forget-password-link">비밀번호를 잊으셨나요?</a>
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
            </form>
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
