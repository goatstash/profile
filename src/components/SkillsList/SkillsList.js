import "./skillsList.css";
import Skills from "../Skills/Skills";
import { skillsData } from "../../SkillsData";

const SkillsList = () => {
  return (
    <div className="sl">
      <div className="sl-texts">
        <h1 className="sl-title">Skills</h1>
      </div>
      <div className="sl-list">
        {skillsData.map((logo) => (
          <Skills key={logo.id} img={logo.img} />
        ))}
      </div>
      <div className="sl-right">
        <div className="sl-bg"></div>
      </div>
    </div>
  );
};

export default SkillsList;
