import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container text-center">
        <h1 className="about-heading">ALCEDO Adult Education Centre</h1>
        <p className="about-text">
          Transform your future with our expert-led courses.
          <br />
          We offer comprehensive programs in four key areas to support your
          personal and professional growth.
        </p>
        <div className="about-cards-container d-flex flex-wrap justify-content-center">
          <Card className="about-card m-3">
            <CardImg
              top
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1736550167/pexels-alex-green-5699466_zgptm9.jpg"
              alt="Psychology course"
              className="card-image"
            />
            <CardBody>
              <CardTitle tag="h5">Psychology</CardTitle>
              <CardText>
                Explore the fascinating world of human behavior and mental
                processes with our expert-led psychology courses.
              </CardText>
              <Button color="primary">Learn More</Button>
            </CardBody>
          </Card>
          <Card className="about-card m-3">
            <CardImg
              top
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1736550096/pexels-janetrangdoan-1128678_fqn2ez.jpg"
              alt="Nutrition course"
              className="card-image"
            />
            <CardBody>
              <CardTitle tag="h5">Nutrition</CardTitle>
              <CardText>
                Discover the essentials of healthy eating and wellness with our
                in-depth nutrition programs.
                <br/>
                <br/>
              </CardText>
              <Button color="primary">Learn More</Button>
            </CardBody>
          </Card>
          <Card className="about-card m-3">
            <CardImg
              top
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1736461446/pexels-pixabay-159844_uhjco7.jpg"
              alt="Education course"
              className="card-image"
            />
            <CardBody>
              <CardTitle tag="h5">Education</CardTitle>
              <CardText>
                Enhance your skills and knowledge with our comprehensive
                education-focused training courses.
              </CardText>
              <Button color="primary">Learn More</Button>
            </CardBody>
          </Card>
          <Card className="about-card m-3">
            <CardImg
              top
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1736550311/pexels-mikhail-nilov-8297620_blcjtl.jpg"
              alt="Career development"
              className="card-image"
            />
            <CardBody>
              <CardTitle tag="h5">Career Development</CardTitle>
              <CardText>
                Achieve your professional goals with tailored career development
                programs.
                <br/>
                <br/>
              </CardText>
              <Button color="primary">Learn More</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;






  
 
  