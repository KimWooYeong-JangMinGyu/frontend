import { useNavigate } from "react-router-dom";
import useLocalStorage from "./LocalStorage";

const useRegform = () => {
  const navigate = useNavigate();

  const {
    value: email,
  } = useLocalStorage({ key: "email", defaultValue: "" });

  const nextStep = () => {
    // TODO : form 데이터 체크
    navigate("/signup/membership");
  };

  return { email, nextStep };
};

export default useRegform;