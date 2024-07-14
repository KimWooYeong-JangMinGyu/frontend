import CommonButton from "../components/CommonButton";
import Logo from "../components/Logo";
import "../styles/MainPage.scss";


const MainPage = () => {
	return (
		<div>
			<div className="header">
				<div className="header-container">
					<Logo />
					<CommonButton className="login-btn">
						<span>로그인</span>
					</CommonButton>
				</div>
			</div>
			<div className="body">
				<div className="first-container">
					<div className="container-group">
						<div className="img-container">
							<img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/496c9504-f47f-4740-b897-62b375773374/KR-ko-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_74ec390b-78bd-4811-b139-bdeca1c2457f_small.jpg" />
							<div className="img-blur" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
