import React, { useState, useEffect } from "react";

import "./Home.css";

function Home() {
  const text = "I build digital worlds, one line of code at a time";

  return (
    <div className="d-flex justify-content-center home">
      <div className="d-flex flex-column justify-content-center px-3">
        <p className="intro">Hi, my name is</p>
        <h1 className="mb-3 name">Rangi Arambewela</h1>
        <h3 className="home-description pt-1">{text}</h3>
      </div>
    </div>
  );
}

export default Home;
