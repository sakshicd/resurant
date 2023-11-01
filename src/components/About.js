import React from "react";
import AboutImg from "../assets/images/about-img.jpg";
const About = () =>{
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading about">
          about us
        </h1>
        
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>We have been making healthy food last for 10 years</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
