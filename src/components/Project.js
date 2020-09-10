import React from "react";
import "./Project.scss";
const Project = ({ description, image, align }) => {
  return (
    <div className={"project-card " + align}>
      <div className="container">
        <div className="description">
          <div>
            <a href={description.url} className="prod-Title">
              {description.title}
            </a>
            <p className="prod-description">{description.description}</p>
            <p className="prod-technologies">{description.technologies}</p>
          </div>
        </div>
        <img src={image} />
      </div>
    </div>
  );
};

export default Project;
