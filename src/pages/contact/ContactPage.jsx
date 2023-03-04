import "./Contact.css";
import linkedinIcon from "../../images/linkedin-icon.svg";
import mailIcon from "../../images/mail-icon.svg";
import resumeIcon from "../../images/resume-icon.svg";
import resume from "../../documents/Rangi_Arambewela.pdf";

function Contact() {
  return (
    <div className="contact">
      <div className="contact d-lg-none d-flex flex-column justify-content-center align-items-center px-3">
        <h2 className="text-center">Let's Get In Touch</h2>
        <div className="d-flex py-5 flex-column contact-info">
          <a
            className=" d-flex align-items-center mb-0 text-decoration-none contact-text"
            href="https://www.linkedin.com/in/rangi-arambewela/"
            target="_blank"
          >
            <img className="icon col-auto px-0" src={linkedinIcon} />
            <span className="ps-3 contact-text">View Profile</span>
          </a>

          <a
            className=" d-flex align-items-center mb-0 text-decoration-none contact-text"
            href="mailto: rangiarambewelaa@gmail.com"
          >
            <img className="icon col-auto px-0" src={mailIcon} />
            <span className="ps-3  contact-texttext-break">
              rangiarambewelaa@gmail.com
            </span>
          </a>

          <a
            className=" d-flex align-items-center mb-0 text-decoration-none contact-text"
            href={resume}
            target="_blank"
          >
            <img className="icon col-auto px-0" src={resumeIcon} />
            <span className="ps-3 contact-text">View Resume</span>
          </a>
        </div>
      </div>
      <div className="d-none d-lg-flex desktop-view overflow-hidden">
        <div className="col-5 px-0 desktop-title d-flex align-items-center">
          <h2 className="mb-0 text-center p-5 contact-title">
            Let's Get In Touch
          </h2>
        </div>
        <div className="col-7 d-flex py-5 flex-column contact-info justify-content-evenly">
          <a
            className=" d-flex align-items-center mb-0 text-decoration-none contact-text"
            href="https://www.linkedin.com/in/rangi-arambewela/"
            target="_blank"
          >
            <img className="icon col-auto px-0" src={linkedinIcon} />
            <span className="ps-3">View Profile</span>
          </a>

          <a
            className=" d-flex align-items-center mb-0 text-decoration-none contact-text"
            href="mailto: rangiarambewelaa@gmail.com"
          >
            <img className="icon col-auto px-0" src={mailIcon} />
            <span className="ps-3 text-break">rangiarambewelaa@gmail.com</span>
          </a>

          <a
            className=" d-flex align-items-center mb-0 text-decoration-none contact-text"
            href="Rangi_Arambewela.pdf"
            target="_blank"
          >
            <img className="icon col-auto px-0" src={resumeIcon} />
            <span className="ps-3">View Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
