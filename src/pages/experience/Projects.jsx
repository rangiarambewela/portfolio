import React, { useState } from "react";
import RezReview from "./RezReview";
import PMApp from "./PMApp";
import Portfolio from "./Portfolio";
import "./Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderTabItem = () => {
    switch (activeTab) {
      case "tab1":
        return <RezReview />;
      case "tab2":
        return <PMApp />;
      case "tab3":
        return <Portfolio />;
    }
  };

  return (
    <div className="px-3 py-3 projects">
      <h2 className="experience-title text-lg-center mb-3">Projects</h2>
      <div className="d-flex justify-content-between justify-content-lg-center mb-3 mb-lg-5">
        <button
          className={`tab text-center px-sm-3 mx-lg-3 ${
            activeTab === "tab1" ? "chosen" : ""
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          RezReview
        </button>
        <button
          className={`tab text-center px-sm-3 mx-lg-3 ${
            activeTab === "tab2" ? "chosen" : ""
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          C++ App
        </button>
        <button
          className={`tab text-center px-sm-3 mx-lg-3 ${
            activeTab === "tab3" ? "chosen" : ""
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Portfolio
        </button>
      </div>
      <div>{renderTabItem()}</div>
    </div>
  );
};

export default Projects;
