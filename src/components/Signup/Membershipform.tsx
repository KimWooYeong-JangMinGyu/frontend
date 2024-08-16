import checkmark from "../../assets/images/Checkmark.png";

const Membershipform = () => {

  return (
    <div className="body-container membership">
      <div className="body-inner">
        <img className="step-logo" src={checkmark} />
        <span className="step">2/3단계</span>
        <span className="title">원하는 멤버십을 선택하세요.</span>

      </div>
    </div>
  );
};

export default Membershipform;