import React from "react";
import "./Projects.scss";
import Project from "./Project";

const descriptions = [
  {
    title: "Furniss",
    url: "https://furniss.herokuapp.com/",
    description: `Furniss is a marketplace where registered users can buy and sell up-cycled
    and pre-loved furniture. Users can create an account, publish new products
    to their gallery, check their reviews and ratings, check the most popular
    items, search, filter and sort products, process payments and access their
    sales and purchase history.`,
    technologies: "React, Typescript, Redux, Express, Postgresql",
  },
  {
    title: "Lukis-Lukis",
    url: "http://lukis-lukis.herokuapp.com/",
    description:
      "Lukis-lukis is a realtime drawing application that allows friends to get together and draw on the same canvas. I came up with this idea during the lockdown so that friends would have a way to connect without having to leave their homes. I build this project from the ground up, using fabric js for the frontend library, Socket.io as a websocket library and NoSQL for database.",
    technologies: "React, Socket.io Express, MongoDB",
  },
  {
    title: "Alien Invasion",
    url: "https://github.com/neesafarza/Alien-Invasion",
    description: `Alien Invasion is a desktop application/ game. The user has to fight off aliens that come in spaceship with 3 life to spares.
    After the user have defeated aliens in one level, they will level up and with each level the aliens would come down faster.`,
    technologies: "Pygame, Python3",
  },
];

const Projects = () => {
  return (
    <div>
      <h2>Featured Projects</h2>
      <Project
        description={descriptions[0]}
        image={require("../assets/furniss.gif")}
        align={"right"}
      />
      <Project
        description={descriptions[1]}
        image={require("../assets/lukislukis.gif")}
        align={"left"}
      />
      <Project
        description={descriptions[2]}
        image={require("../assets/aliensinvasion.gif")}
        align={"right"}
      />
    </div>
  );
};

export default Projects;
