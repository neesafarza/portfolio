import React from "react";
import './app-header.scss';
import { Github, Linkedin, Mail } from 'grommet-icons';

const AboutMe = () => {
  return (
    <div className='app-header'>
      <div class='upper-header'>
      <div className="profile-picture">
        <img src="https://avatars2.githubusercontent.com/u/48457109?s=460&u=f2b6a155f8b9dddba1caf678bf3636e3616c47b1&v=4"/>
      </div>
      <div className="description">
        <h1 className="name-title">Aneesa Zafri</h1>
        <h3>
          Hello folks! I am a full stack developer experienced in the JavaScript
          ecosystem and always have a passion for creating and problem solving.
          I am a fast learner with a can do attitude who enjoys working in a
          team of exceptional developer who can help each other further their
          careers. When I'm not fixing bugs and creating applications, you can
          find me either at the art gallery 🖼, any west end musical 🎭 or at a
          climbing centre 🧗🏽‍♀️
        </h3>
      </div>
      </div>
      <div className="links-bar">
        <a href="https://github.com/neesafarza" target="_blank">
          <Github /> <span>github.com/neesafarza</span>
          </a>
        <a href="https://www.linkedin.com/in/aneesazafri?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiioRRAI1QR622nBacMCHMA%3D%3D" target="_blank">
        <Linkedin /> <span>linkedin.com/in/aneesazafri</span>
        </a>
        <a>
        <Mail /> <span>aneesazafri@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
