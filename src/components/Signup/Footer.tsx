const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-innner">
        <span>
          질문이 있으신가요? 문의 전화: &nbsp;<a href="tel:00-308-321-0161 (수신자 부담)">00-308-321-0161 (수신자 부담)</a>
        </span>

        <div className="footer-link-group">
          <a href="#">자주 묻는 질문</a>
          <a href="#">고객 센터</a>
          <a href="#">넷플릭스 스토어</a>
          <a href="#">이용 약관</a>
          <a href="#">개인정보 처리방침</a>
          <a href="#">쿠키 설정</a>
          <a href="#">회사 정보</a>
        </div>

        <div className="copyright-group">
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
  );
};

export default Footer;