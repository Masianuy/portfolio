import React from 'react';
import Project from '../project/Project';
import './portfolio.scss';
import {projects} from '../../data'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="portfolio_content">
            <h2 className="portfolio_content-title">My works</h2>
            <p className="portfolio_content-subtitle">I never stop working towards my goals!</p>
        </div>
        <div className="portfolio_list">
          {projects.map(item => (
            <Project key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default Portfolio