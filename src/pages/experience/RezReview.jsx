import "./RezReview.css";

function RezReview() {
  return (
    <div class="row align-items-center justify-content-between project">
      <div class="col-lg-6 ">
        <h3 class=" title text-white text-start">
          RezReview | Browse and Review Rental Listings{" "}
        </h3>

        <p class="text-white text-start  mb-3">
          A modern full-stack web application that implements user
          authentication, and REST API’s to allow users to create accounts,
          browse and review rental listings
        </p>
        <div class="d-flex flex-column flex-md-row justify-content-start justify-content-lg-center">
          <a
            type="button"
            class="btn view-btn px-5 py-1"
            target="_blank"
            href="https://desolate-journey-21154.herokuapp.com/"
          >
            View
          </a>
        </div>
        <div class="mt-3 ps-3">
          <div className="d-flex align-items-start">
            <img src="triangle-white.svg" className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Built an Express-based web application using ExpressJS and NodeJS
              to set up servers and establish routing
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src="triangle-white.svg" className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Implemented CRUD operations using RESTful API to parse HTTP
              requests and generate responses
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src="triangle-white.svg" className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Managed user data and listing reviews using MongoDB
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src="triangle-white.svg" className="bullet-point" />
            <p className="pb-3 d-block px-3 text-white">
              Created a login system using Passport (middleware for Node.js) to
              accomplish user authentication
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
                <img src="RezReview_home.png" class="d-block w-100" alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex align-items-center">
                <img
                  src="Screen Shot 2022-02-13 at 11.59.48 PM.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex align-items-center">
                <img
                  src="Screen Shot 2022-02-13 at 11.57.53 PM.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev carousel-button"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
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

export default RezReview;
