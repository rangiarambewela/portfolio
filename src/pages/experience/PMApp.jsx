import triangleWhite from "../../images/triangle-white.svg";
import pmLogin from "../../images/PM_login.png";
import pmDashboard from "../../images/PM_dashboard.png";

function PMApp() {
  return (
    <div class="row align-items-center justify-content-between project">
      <div class="col-lg-6 ">
        <h3 class=" title text-white text-start">
          Productivity Manager | C++ Desktop App
        </h3>
        <p class="text-white text-start text-lg-center mb-1">
          An application to assist students with task management, scheduling,
          and progress tracking
        </p>
        <div class="mt-3 ps-3">
          <div className="d-flex align-items-start">
            <img src={triangleWhite} className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Developed an object-oriented dashboard using Qt (C++) with custom
              input forms and validation, an interactive calendar, and to-do
              list components
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangleWhite} className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Implemented the singleton design pattern for single-point access
              to user information within the application
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangleWhite} className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Designed a normalized database schema in SQLite to store user and
              task metadata
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 carousel-size d-flex align-items-center">
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide carousel-dark"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex align-items-center">
                <img src={pmLogin} class="d-block w-100" alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex align-items-center">
                <img src={pmDashboard} class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev carousel-button"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next carousel-button"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PMApp;
