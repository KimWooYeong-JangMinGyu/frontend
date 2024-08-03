import { useRef } from "react";
import useUserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./LocalStorage";

const useStartNetflix = () => {
  const navigate = useNavigate();
  const { getByEmail } = useUserInfo();
  const emailInputField = useRef<HTMLInputElement>(null);
  const {
    value: email,
    setValue: setEmail,
  } = useLocalStorage({ key: "email", defaultValue: "" });

  const start = async () => {
    // TODO : input field의 상태 체크
    if (emailInputField.current?.value) {
      await setEmail(emailInputField.current?.value ?? "");

      // TODO : user type 지정
      const userInfo = getByEmail(email);

      if (userInfo) {
        navigate("/signup/registration");
      } else {
        navigate("/signup/password");
      }
    }
  };

  return { emailInputField, email, start };
};

export default useStartNetflix;