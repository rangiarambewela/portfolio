import "./WorkExperience.css";
import triangle from "../../images/triangle.svg";

function WorkExperience() {
  return (
    <div className="d-lg-flex justify-content-center p-3 work-experience">
      <div className="col-lg-6">
        <h2 className="mb-0 experience-title text-center">Work Experience</h2>
        <h5 className=" pt-3">
          Full Stack Engineering Intern <br className="d-sm-none" />
          <span className="fw-bold" style={{ color: "#f4f3ee" }}>
            @ Stan
          </span>
        </h5>
        <p className="stan-description">
          A start-up a start-up building an all-in-one platform for creators to
          sell digital products in an online storefront. By offering a
          user-friendly solution, Stan enables creators to monetize their
          audience with ease, providing a seamless experience for both them and
          their audience.
        </p>
        <p className="text-sm"> May 2022 - August 2022 (4 Months)</p>
        <div className="px-3">
          <div className="d-flex align-items-start">
            <img src={triangle} className="bullet-point" />
            <p className="pb-3 d-block px-3">
              Implemented responsive layouts and interactive components on
              multiple pages using Vue.js and Bootstrap to improve user
              experience on various devices
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangle} className="bullet-point" />
            <p className="pb-3 d-block px-3">
              Built reusable and modular front-end components for multiple web
              app features using Vue.js
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangle} className="bullet-point" />
            <p className="pb-3 d-block px-3">
              Led development of main landing page using HTML, CSS, Bootstrap,
              and JavaScript to increase customer conversion rate (see first
              page at: www.stan.store/)
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangle} className="bullet-point" />
            <p className="pb-3 d-block px-3">
              Collaborated with cross-functional teams, including UX/UI
              designers, business, and engineering teams, to finalize features
              for optimal user experience
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangle} className="bullet-point" />
            <p className="pb-3 d-block px-3">
              Launched a feature for managing subscriber payments using Flask,
              Stripe API and webhooks to synchronize Stripe data with Stan’s
              MySQL database
            </p>
          </div>
          <div className="d-flex align-items-start">
            <img src={triangle} className="bullet-point" />
            <p className="pb-3 d-block px-3">
              Participated in weekly sprints and rigorous code review with the
              engineering team using Git, Bitbucket and Jira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
