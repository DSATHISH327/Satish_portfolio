import React from "react";
import "./Contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp,faInstagram, faFacebook,faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contactus = () => {
  return (
    <div className="contact-container" id="Contactme">
      <h2>Contact Me</h2>
      <ul className="contact-icons">
        <li>
          <a href="https://wa.me/+919347742603" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} className="large-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/satish_tarak_fan/profilecard/?igsh=MWR2OWFvbHFqN3QwNA==" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="large-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sathishyadav.desiboinasathish?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="large-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/DSATHISH327" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} className="large-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/satish-desaboina-71356824a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="large-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:sathishdesaboina42@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <FontAwesomeIcon icon={faEnvelope} className="large-icon" />
          </a>
        </li>
        <li>
          <a href="tel:+919347742603" title="Call Satish">
            <FontAwesomeIcon icon={faPhone} className="large-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contactus;
