import React from "react"
import '../../sass/Contact.scss'
import CV from '../../images/Curriculo Vinícius Melo.pdf'
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'


function Contact() {
  return (
    <div className="main--Contact">
      <h1>Entre em Contato</h1>
      <div className="Contact">
        <a href="mailto:vinicius.apol.melo@gmail.com" target="_blank" rel="noreferrer">
          <button className="Mail">
            <FaEnvelope />
            Envie um Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/vin%C3%ADcius-melo-59831522a/" target="_blank" rel="noreferrer">
          <button className="Linkedin">
            <FaLinkedinIn />
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/Vinicius-AMelo" target="_blank" rel="noreferrer">
          <button className="Github">
            <FaGithub />
            GitHub
          </button>
        </a>
        <a href={CV} download>
          <button className="Download">
            Baixar Currículo
          </button>
        </a>




      </div>
    </div>
  );
}

export default Contact;
