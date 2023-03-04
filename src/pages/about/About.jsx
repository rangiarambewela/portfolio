import "./About.css";

function About() {
  const paragraph1 =
    "Hi there! My name is Rangi Arambewela, and I'm a recent graduate with a major in Computer Science and Physiology. Currently, I am looking for a Full Stack Software Engineer position and am excited to join a diverse team of talented individuals who are passionate about making an impact. I believe in continuous learning and growth, and I'm always looking to expand my skill set to tackle new challenges.";
  const paragraph2 =
    "Outside of work, I enjoy watching Chinese and Korean Dramas, reading mystery/thriller novels, and playing volleyball. Thanks for stopping by and taking the time to learn more about me!";
  return (
    <div className="about px-5 d-flex align-items-center justify-content-center flex-column flex-lg-row py-3 py-md-0">
      <div className="col-lg-7 px-0 col-sm-10">
        <img className="img-fluid" src="linkedin2.png" />
      </div>
      <div className="col-lg-5 col-sm-10 px-0 py-3 py-lg-5 description d-flex flex-column align-items-center">
        <h2 className="mb-0 about-title">About Me</h2>
        <p className="text-center mb-0 px-1 px-md-3 px-lg-5 py-3">
          {paragraph1}
        </p>
        <p className="text-center mb-0 px-1 px-md-3 px-lg-5 pb-3">
          {paragraph2}
        </p>
      </div>
    </div>
  );
}

export default About;
