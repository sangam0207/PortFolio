import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './contact.css';
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-1-ptyl.onrender.com/send', formData);
      console.log('Message sent successfully', response.data);
    } catch (error) {
      console.log('Error sending message:', error.message);
    }
  };

  return (
    <>
      <div className="container contact" id="contact">
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h1>CONTACT ME</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/sangam.shukla.7503/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.instagram.com/sangam.shukla.7503/" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/sangam-shukla-225412271/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/SangamShuk9387" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/sangam0207" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:ssrv2024@gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
