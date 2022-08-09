import React from "react";
import main from "../assets/images/job-offers.svg";
import Wrapper from "../assets/wrappers/LandingPage";

import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem laudantium expedita, illo asperiores non voluptatibus
            magni veritatis tempora et est officiis! Praesentium sequi aperiam
            labore reprehenderit magnam alias delectus! Provident!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
