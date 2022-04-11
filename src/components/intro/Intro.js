import "./intro.css";
import tb from "../../img/tb.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tobias Bedford</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">GA Alumni</div>
            </div>
          </div>
          <p className="i-description">
            I'm a junior software engineer who loves to build and design
            exceptional digital experiences.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={tb} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
