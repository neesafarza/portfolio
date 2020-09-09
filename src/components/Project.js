import React from "react";
import "./Project.scss";
const Project = ({ description, image, align }) => {
  return (
    <div className={"project-card " + align}>
      <div className="container">
      <div className="description">
      <div>
      <a href={description.url}>{description.title}</a>
        <p>
          {description.description}
        </p>
      <p>{description.technologies}</p>
  </div>
      </div>
      <img src={image} />
      </div>
    </div>
  );
};

export default Project;
