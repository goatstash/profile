import "./skills.css";

const Skills = ({ img }) => {
  return (
    <div className="s">
      <img src={img} alt="" className="s-img" />

      <div className="s-right">
        <div className="s-bg"></div>
      </div>
    </div>
  );
};

export default Skills;
