import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="container mission-container">
        {/* Left Side: Text */}
        <div className="mission-text">
          <h2>About Us</h2>
          <p>
            ALCEDO Adult Education Centre is an institution dedicated to education and personal development. 
            Through our collaborations with leading universities in both Poland and Europe, and with our expert trainers, 
            we provide high-quality courses in education, career development, nutrition, and psychology.
          </p>
          <p>
            <strong>Our mission</strong> is to deliver modern training programs that respond to rapidly evolving educational needs 
            while meeting the requirements of individuals, groups, and institutions.
          </p>
          <p><strong>Our Objectives:</strong></p>
          <ul>
            <li>To provide high-quality and up-to-date training</li>
            <li>To contribute to our participants' personal and professional development</li>
            <li>To deliver practical and applicable knowledge</li>
          </ul>
          <p>
            At ALCEDO Adult Education Centre, we believe in the power of continuous learning and development. 
            Our commitment to excellence is reflected in our diverse course offerings and expert-led programs.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="mission-image">
          <img
            src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1736462491/pexels-divinetechygirl-1181672_jhjiqr.jpg"
            alt="ALCEDO Education"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
