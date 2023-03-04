import Nav from "./Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/ContactPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/experience" element={<ExperiencePage />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
