import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import SkillsList from "./components/SkillsList/SkillsList";

function App() {
  return (
    <div className="App">
      {/* <Toggle /> */}
      <Intro />
      <About />
      <ProjectList />
      <SkillsList />
      <Contact />
    </div>
  );
}

export default App;
