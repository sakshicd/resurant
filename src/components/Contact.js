import React, { useState } from "react";
import ContactImg from "../assets/images/contact-img.jpg";

function Contact  ()  {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to store data in local storage
  const storeDataLocally = (key, data) => {
    localStorage.setItem(key, data);
  };

  // Function to retrieve data from local storage
  const getStoredData = (key) => {
    return localStorage.getItem(key);
  };

  const handleSubmit = () => {
    // Store data in local storage when the form is submitted
    storeDataLocally("contactName", name);
    storeDataLocally("contactEmail", email);
    storeDataLocally("contactMessage", message);
  };

    return (
    <>
    <section className="contact" id="contact">  
      <div className="row">
      <div className="image">
            <img src= {ContactImg} alt="" />
          </div>
          
        <form action="">
          <h3>Contact Us</h3>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </section>
    </>
  )
}
export default Contact