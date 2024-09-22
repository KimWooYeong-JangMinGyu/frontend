const mockData = {
    list: [
      { membershipId: 1, name: "광고형 스탠다드", price: 5500, quality: "good", resolution: "full_hd", supportDevice: "TV, 컴퓨터, 스마트폰, 태블릿", activeUsers: 2, activeDevices: 2, advertisement: "little_ad" },
      { membershipId: 2, name: "스탠다드", price: 13500, quality: "good", resolution: "full_hd", supportDevice: "TV, 컴퓨터, 스마트폰, 태블릿", activeUsers: 2, activeDevices: 2, advertisement: "no_ad" },
      { membershipId: 3, name: "프리미엄", price: 17000, quality: "better", resolution: "4k_hdr", supportDevice: "TV, 컴퓨터, 스마트폰, 태블릿", activeUsers: 4, activeDevices: 4, advertisement: "no_ad" },
    ],
  };

  const getCaptionResolution = (value: string, isShort: boolean) => {
    if (value === "full_hd") {
      return isShort ? "1080p" : "1080p(풀 HD)";
    } else if (value === "4k_hdr") {
      return isShort ? "4K + HDR" : "4K(UHD) + HDR";
    }

    throw new Error(`Unexpected resolution value: ${value}`);
  };

  const getCaptionQuality = (value: string) => {
    if (value === "good") {
      return "좋음";
    } else if (value === "better") {
      return "가장 좋음";
    }

    throw new Error(`Unexpected quality value: ${value}`);
  };

  const getCaptionAdvertisement = (value: string) => {
    if (value === "little_ad") {
      return "생각보다 적은 광고";
    } else if (value === "no_ad") {
      return "무광고";
    }

    throw new Error(`Unexpected quality value: ${value}`);
  };

export {
    mockData,
    getCaptionResolution,
    getCaptionQuality,
    getCaptionAdvertisement,
};
