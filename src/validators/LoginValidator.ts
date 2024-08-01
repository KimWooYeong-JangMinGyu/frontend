const LogintValidator = (id: string, value: string): string => {
  let result: string = "";

  switch (id) {
    case "email": {
      const regexp: RegExp = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");

      if (!value) {
        result = "정확한 이메일 주소나 전화번호를 입력하세요.";
      } else if (!regexp.test(value)) {
        result = "정확한 이메일 주소를 입력하세요.";
      }
      break;
    }
    case "password":
      if (!value || value.length > 60 || value.length < 4) {
        result = "비밀번호는 4~60자 사이여야 합니다.";
      }
      break;
  }

  return result;
};

export default LogintValidator;