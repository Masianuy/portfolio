import React from 'react';
import './project.scss';

const Project = ({img, link}) => {
  return (
    <div className="project">
        <div className="project_browser">
            <p className="project_browser-circle"></p>
            <p className="project_browser-circle"></p>
            <p className="project_browser-circle"></p>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="project_img">
            <img src={img} alt="" loading='auto'/>
        </a>
    </div>
  )
}

export default Project