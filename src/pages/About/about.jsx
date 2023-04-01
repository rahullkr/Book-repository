import React from "react";
import "./about.css";
import aboutImg from '../../images/about-img.jpg'

const about = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <div className="about-title fs-26 ls-1">About TypeTales</div>
            <p className="fs-17"> Our book website is a virtual haven for book enthusiasts and researchers alike. With an extensive collection of literature spanning various genres, our website provides a one-stop-shop for all your reading needs. This user-friendly interface makes searching for books effortless, with simple and intuitive navigation tools that allow you to find the perfect read with ease. It ensures that there's something for every reader. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
