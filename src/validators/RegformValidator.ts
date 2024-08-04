const RegformValidator = (id: string, value: string): string => {
  let result: string = "";

  switch (id) {
    case "email": {
      const regexp: RegExp = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");

      if (!value) {
        result = "이메일 주소는 반드시 입력하셔야 합니다.";
      } else if (value.length > 50 || value.length < 5) {
        result = "이메일 주소는 5~50자 사이여야 합니다.";
      } else if (!regexp.test(value)) {
        result = "이메일 주소를 정확히 입력하세요.";
      }
      break;
    }
    case "password":
      if (!value) {
        result = "비밀번호는 반드시 입력하셔야 합니다.";
      } else if (value.length > 60 || value.length < 6) {
        result = "비밀번호는 6~60자 사이여야 합니다.";
      }
      break;
  }

  return result;
};

export default RegformValidator;