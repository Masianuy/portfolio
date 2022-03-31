import React from 'react';
import i_work from '../../img/work.jpg';
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left_img about-left_bg"></div>
        <div className="about-left_img">
          <img src={i_work} alt="I work" />
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-right_title">Courses</h2>
        <div className="about-right_courses">
          <div className="about-right_courses-date">
            <p>From February 2022</p>
            <p>- until now</p>
          </div>
          <div className="about-right_courses-place">
            <p>FULL STACK JS Developer</p>
            <p>FRESHCODE, Zaporizhia</p>
          </div>
        </div>
        <div className="about-right_courses">
          <div className="about-right_courses-date">
            <p>From February 2020</p>
            <p>to March 2020</p>
          </div>
          <div className="about-right_courses-place">
            <p>3D visualizer (3ds Max / Corona render)</p>
            <p>СтартUp, Kremenchuk</p>
          </div>
        </div>
        <div className="about-right_courses">
          <div className="about-right_courses-date">
            <p>From October 2018</p>
            <p>to January 2019</p>
          </div>
          <div className="about-right_courses-place">
            <p>Web designer (Photoshop / Illustrator / Figma)</p>
            <p>СтартUp, Kremenchuk</p>
          </div>
        </div>
        <div className="about-right_courses">
          <div className="about-right_courses-date">
            <p>From May 2018</p>
            <p>to September 2018</p>
          </div>
          <div className="about-right_courses-place">
            <p>Junior Front-end developer (html / css / js)</p>
            <p>Beetroot academy, Kremenchuk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About