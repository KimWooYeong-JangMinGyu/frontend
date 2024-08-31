import CommonButton from "../CommonButton";

const Membershipform = () => {
  const mockData = {
    list: [
      { membershipId: 1, name: "프리미엄", price: 17000, quality: "better", resolution: "4k_hdr", supportDevice: "TV, 컴퓨터, 스마트폰, 태블릿", activeUsers: 4, activeDevices: 4, advertisement: "no_ad" },
      { membershipId: 2, name: "스탠다드", price: 13500, quality: "good", resolution: "full_hd", supportDevice: "TV, 컴퓨터, 스마트폰, 태블릿", activeUsers: 2, activeDevices: 2, advertisement: "no_ad" },
      { membershipId: 3, name: "광고형 스탠다드", price: 5500, quality: "good", resolution: "full_hd", supportDevice: "TV, 컴퓨터, 스마트폰, 태블릿", activeUsers: 2, activeDevices: 2, advertisement: "little_ad" },
    ],
  };

  const getCaption_resolution = (value: string, isShort: boolean) => {
    if (value === "full_hd") {
      return isShort ? "1080p" : "1080p(풀 HD)";
    } else if (value === "4k_hdr") {
      return isShort ? "4K + HDR" : "4K(UHD) + HDR";
    }

    throw new Error(`Unexpected resolution value: ${value}`);
  };

  const getCaption_quality = (value: string) => {
    if (value === "good") {
      return "좋음";
    } else if (value === "better") {
      return "가장 좋음";
    }

    throw new Error(`Unexpected quality value: ${value}`);
  };

  const getCaption_advertisement = (value: string) => {
    if (value === "little_ad") {
      return "생각보다 적은 광고";
    } else if (value === "no_ad") {
      return "무광고";
    }

    throw new Error(`Unexpected quality value: ${value}`);
  };

  return (
    <div className="body-container membershipform">
      <div className="body-inner">
        <span className="step">2/3단계</span>
        <span className="title">원하는 멤버십을 선택하세요.</span>
        <div className="list">
          {
            mockData.list.reverse().map((item) => (
              <div className="item" key={item.membershipId}>
                <div className="item-title">
                  <span>{item.name}</span>
                  <span>{getCaption_resolution(item.resolution, true)}</span>
                </div>
                <ul className="item-info">
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">월 요금</div>
                      <div className="row-value price">{item.price.toLocaleString()}원</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">화질과 음질</div>
                      <div className="row-value">{getCaption_quality(item.quality)}</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">해상도</div>
                      <div className="row-value">{getCaption_resolution(item.resolution, false)}</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">지원 디바이스</div>
                      <div className="row-value">{item.supportDevice}</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">가구 구성원 간 동시접속자 수</div>
                      <div className="row-value">{item.activeUsers}</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">저장 디바이스</div>
                      <div className="row-value">{item.activeDevices}</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">광고</div>
                      <div className="row-value">{getCaption_advertisement(item.advertisement)}</div>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          }
        </div>
        <div className="info">
          <small className="info-row">
            <span>
              <a href="https://help.netflix.com/node/126831">광고형 멤버십에 대해 자세히 알아보세요</a>
              . 광고형 멤버십을 선택하면, 맞춤형 광고와 Netflix의{" "}
              <a href="https://help.netflix.com/legal/privacy">개인정보 처리방침</a>
              에 부합하는 기타 목적을 위해 생년월일을 제공해 주셔야 합니다.
            </span>
          </small>
          <small className="info-row">
            <span>
              풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은{" "}
              <a href="https://help.netflix.com/legal/termsofuse">이용 약관</a>
              을 확인하세요.
            </span>
          </small>
          <small className="info-row">
            <span>
              함께 거주하는 사람들만 계정을 함께 이용할 수 있습니다. 스탠다드 멤버십은 추가 회원을 1명, 프리미엄은 최대 2명까지 등록할 수 있습니다.{" "}
              <a href="https://www.netflix.com/pricing">자세히 알아보기</a>
              . 프리미엄 멤버십은 동시접속 4명, 스탠다드 또는 광고형 스탠다드는 2명까지 가능합니다.
            </span>
          </small>
        </div>

        <CommonButton className="next-button">
          <span>다음</span>
        </CommonButton>
      </div>
    </div>
  );
};

export default Membershipform;
