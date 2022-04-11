import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  //   console.log(projects);
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <h2 className="pl-subtitle">Click for more info</h2>
        <p className="pl-description">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt ad
          vitae. Quo maxime quos odit? Fuga omnis suscipit numquam adipisci unde
          aliquid vel deleniti ex eos excepturi. Atque, nostrum. */}
        </p>
      </div>
      <div className="pl-list">
        {projects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            link={project.link}
            text={project.text}
          />
        ))}
      </div>

      <div className="pl-right">
        <div className="pl-bg"></div>
      </div>
    </div>
  );
};

export default ProjectList;
