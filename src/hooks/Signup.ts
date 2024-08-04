import { useParams } from "react-router-dom";
import InsertPassword from "../components/Signup/InsertPassword";
import Registration from "../components/Signup/Registration";
import Regform from "../components/Signup/Regform";
import MemberShip from "../components/Signup/Membership";

const useSingup = () => {
  const params = useParams();
  let signupBody;

  switch (params.type) {
    case "registration":
      signupBody = Registration;
      break;
    case "regform":
      signupBody = Regform;
      break;
    case "membership":
      signupBody = MemberShip;
      break;
    case "password":
      signupBody = InsertPassword;
      break;
    default:
      signupBody = Registration;
      break;
  }

  return { signupBody };
};

export default useSingup;