import React from 'react'
import { testimonial } from '../Data';

const Testimonial = () => {
  return (
    <>
     <section className="testimonial" id="testimonial">
        <h1 className="heading">
            What Our Customers Says
        </h1>
        <div className="box-container">
{
    testimonial.map((item,index) => (
        <div className="box" key={index * Math.random()}>
            <img  src={item.img}alt="" className="user"/>
            
            <div className="content">
            <h3>Rose Lee</h3>

            
            
            
            <div className="stars">
            <span style={{color:"#FFD300"}} class="fa fa-star checked"> </span>
            <span style={{color:"#FFD300"}} class="fa fa-star checked"> </span>
            <span style={{color:"#FFD300"}} class="fa fa-star checked"> </span>
            <span style={{color:"#FFD300"}} class="fa fa-star"> </span>
            <span style={{color:"#FFD300"}} class="fa fa-star"> </span>
              </div>
           
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo faciliste. Ex, vel?
            </p>
            
</div>
          
          </div>
                
    ))
}
</div>
    
    </section>
    </>
  );
};

export default Testimonial