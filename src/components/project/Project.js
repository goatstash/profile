import "./project.css";

const Project = ({ img, link, text }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle">Tick</div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank">
        <img src={img} alt="" className="p-img" />
        <p>{text}</p>
      </a>
      <div className="p-right">
        <div className="p-bg"></div>
      </div>
    </div>
  );
};

export default Project;
