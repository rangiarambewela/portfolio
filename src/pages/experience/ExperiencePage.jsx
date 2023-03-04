import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import "./ExperiencePage.css";
import { useEffect } from "react";

function ExperiencePage() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "#d8d6d0";

    return () => {
      body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div>
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default ExperiencePage;
