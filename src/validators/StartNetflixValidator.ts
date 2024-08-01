const StartNetflixValidator = (id: string, value: string): string => {
  let result: string = "";

  switch (id) {
    case "email": {
      const regexp: RegExp = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");

      if (!value) {
        result = "이메일 주소는 반드시 입력하셔야 합니다.";
      } else if (!regexp.test(value)) {
        result = "정확한 이메일 주소나 전화번호를 입력하세요.";
      }
      break;
    }
  }

  return result;
};

export default StartNetflixValidator;
