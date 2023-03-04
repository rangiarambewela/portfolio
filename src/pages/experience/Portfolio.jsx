import triangleWhite from "../../images/triangle-white.svg";

function Portfolio() {
  return (
    <div class="row align-items-center justify-content-center project pb-5 mb-3">
      <div class="col-lg-6 ">
        <div class="d-flex justify-content-start justify-content-lg-center ">
          <h3 class=" title text-white">Personal Portfolio Website</h3>
        </div>
        <div class="mt-3 ps-3">
          <div className="d-flex align-items-start">
            <img src={triangleWhite} className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Built a single-page website using React.js, leveraging
              component-based architecture to create a modular codebase
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangleWhite} className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Utilized react-router to enable seamless navigation between pages
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangleWhite} className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Employed Bootstrap and CSS to design the user interface to achieve
              a modern and cohesive look
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
