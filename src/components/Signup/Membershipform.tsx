import CommonButton from "../CommonButton";
import { mockData, getCaptionResolution, getCaptionQuality, getCaptionAdvertisement } from "../../hooks/Membershipform";
import SvgIcon from "../SvgIcon";
import { ReactComponent as CheckSelectSvg } from "../../assets/icons/checkSelect.svg";
import React, { useState } from "react";

const Membershipform = () => {
  const [selectedMembershipId, setSelectedMembershipId] = useState<number | null>(null);

  return (
    <div className="body-container membershipform">
      <div className="body-inner">
        <span className="step">2/3단계</span>
        <span className="title">원하는 멤버십을 선택하세요.</span>
        <div className="list">
          {
            mockData.list.map((item) => (
              <div
                key={item.membershipId}
                className={`item ${selectedMembershipId === item.membershipId ? "item-selected" : ""}`}
                onClick={() => setSelectedMembershipId(item.membershipId)}>
                <div className="item-title">
                  <span>{item.name}</span>
                  <span>{getCaptionResolution(item.resolution, true)}</span>
                  <span><SvgIcon className={`check-icon ${selectedMembershipId === item.membershipId ? "check-icon-selected" : ""}`} Svg={CheckSelectSvg}/></span>
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
                      <div className="row-value">{getCaptionQuality(item.quality)}</div>
                    </div>
                  </li>
                  <li className="item-info-row">
                    <div>
                      <div className="row-name">해상도</div>
                      <div className="row-value">{getCaptionResolution(item.resolution, false)}</div>
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
                      <div className="row-value">{getCaptionAdvertisement(item.advertisement)}</div>
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
