import CommonButton from "../components/CommonButton";
import { ReactComponent as LogoSvg } from "../assets/icons/logo.svg";
import { IoIosArrowForward } from "react-icons/io";
import { ReactComponent as EventIconSvg } from "../assets/icons/event-icon.svg";
import { RiDownloadLine } from "react-icons/ri";
import "../styles/MainPage.scss";
import Accordion from "../components/Accordion/Accordion";
import SvgIcon from "../components/SvgIcon";
import faqData from "../data/faq.json";
import StartNetflixComponent from "../components/Main/StartNetflixComponent";

const MainPage = () => {
	return (
		<div>
			<div className="header">
				<div className="header-container">
          <SvgIcon Svg={LogoSvg} width="9.25rem" height="2.5rem" fill="red" />
					<CommonButton className="login-btn">
						<span>로그인</span>
					</CommonButton>
				</div>
			</div>
			<div className="body">
        <div className="container-group">
          <div className="main-container">
            <div className="img-container">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/07c4fab7-5551-448b-bc2c-5cc27de3f443/KR-ko-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_d7a9338e-6a75-445b-bba6-0cadac28c8c4_small.jpg" />
              <div className="img-blur" />
            </div>
            <div className="center-container">
              <div style={{ marginBottom: "10px" }}>
                <span className="white-3rem-bold">영화, 시리즈 등을 무제한으로</span>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <span className="white-2rem-regular">어디서나 자유롭게 시청하세요. 해지는 언데든 가능합니다.</span>
              </div>
              <StartNetflixComponent />
            </div>
          </div>
          <div className="plan-banner-container">
            <div className="plan-banner">
              <div className="content">
                <EventIconSvg />
                <div>
                  <span className="h3-white">5,500원이면 만날 수 있는 넷플릭스.</span>
                  <span className="span-white">광고형 스탠다드 멤버십에 가입하세요.</span>
                  <button className="link-button">
                    <span>자세히 알아보기</span>
                    <IoIosArrowForward fontSize={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="info-container">
            <div className="info-group">
              <div className="info">
                <span className="white-3rem-900">
                  TV로 즐기세요
                </span>
                <p className="white-1-5rem-400">
                  스마트 TV, PlayStation, Xbox, Chromecast, Apple TV,<br />
                  블루레이 플레이어 등 다양한 디바이스에서<br />
                  시청하세요.
                </p>
              </div>
              <div className="video-group">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                <div className="video tv">
                  <video autoPlay playsInline muted loop>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="info-container">
            <div className="info-group">
              <div className="video-group">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
                <div className="video devices">
                  <video autoPlay playsInline muted loop>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="info">
                <span className="white-3rem-900">
                  어디서나 자유롭게<br />
                  시청하세요
                </span>
                <p className="white-1-5rem-400">
                  각종 영화와 시리즈를 스마트폰, 태블릿, 노트북,<br />
                  TV에서 무제한으로 스트리밍하세요
                </p>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="info-container">
            <div className="info-group">
              <div className="info">
                <span className="white-3rem-900">
                  어린이 전용 프로필을<br />
                  만들어 보세요
                </span>
                <p className="white-1-5rem-400">
                  자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는<br />
                  모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스<br />
                  회원이라면 무료입니다.
                </p>
              </div>
              <div className="video-group">
                <img src="https://occ-0-1360-2218.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdl4VeWgVycbbzJBV1KbIpMScxU_I4h6uTvNRpFab-65jsTTqI0V-g-4Jq4CLaIVqx-wbKAwA_Ee8KhZyTb0SFJ5tK2mifI-GYEB.png?r=15b" />
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="info-container">
            <div className="info-group">
              <div className="video-group">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                <div className="save-content">
                  <div className="img-group">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                  </div>
                  <div className="content">
                      <span>기묘한 이야기</span>
                      <span>저장 중...</span>
                    </div>
                  <RiDownloadLine
                    className="downlaod-icon"
                    size={20}
                  />
                </div>
              </div>
              <div className="info">
                <span className="white-3rem-900">
                  즐겨 보는 콘텐츠를 저장해<br />
                  오프라인으로 시청하세요
                </span>
                <p className="white-1-5rem-400">
                  비행기, 기차, 잠수함. 어디서든 시청하세요.
                </p>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="info-container faq">
            <div className="info-group">
              <span className="white-3rem-900">
                자주 묻는 질문
              </span>

              <div className="faq-list">
                <Accordion>
                  {
                    faqData.map((item, index) => {
                      return (
                        <Accordion.Item
                          key={index}
                          itemKey={index.toString()}
                          title={item["title"]}
                          content={item["content"]}
                        />
                      );
                    })
                  }
                </Accordion>
              </div>

              <StartNetflixComponent />
            </div>
          </div>
          <div className="divider" />
          <div className="info-container footer">
            <div className="info-group">
              <span>
                질문이 있으신가요? 문의 전화: &nbsp;<a href="tel:00-308-321-0161 (수신자 부담)">00-308-321-0161 (수신자 부담)</a>
              </span>

              <div className="footer-link-group">
                <a href="#">자주 묻는 질문</a>
                <a href="#">고객 센터</a>
                <a href="#">계정</a>
                <a href="#">미디어 센터</a>
                <a href="#">투자 정보(IR)</a>
                <a href="#">입사 정보</a>
                <a href="#">넷플릭스 지원 디바이스</a>
                <a href="#">이용 약관</a>
                <a href="#">개인정보 처리방침</a>
                <a href="#">쿠키 설정</a>
                <a href="#">회사 정보</a>
                <a href="#">문의하기</a>
                <a href="#">속도 테스트</a>
                <a href="#">법적 고지</a>
                <a href="#">오직 넷플릭스에서</a>
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
			</div>
    </div>
	);
};

export default MainPage;
