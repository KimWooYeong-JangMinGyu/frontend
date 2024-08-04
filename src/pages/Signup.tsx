import "../styles/Signup.scss";
import Header from "../components/Signup/Header";
import Footer from "../components/Signup/Footer";
import useSingup from "../hooks/Signup";


const Signup = () => {
  const { signupBody: SignupBody } = useSingup();

  return (
    <div className="signup-page">
      <Header />
      <SignupBody />
      <Footer />
    </div>
  );
};

export default Signup;