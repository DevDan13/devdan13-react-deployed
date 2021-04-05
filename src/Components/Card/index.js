import React from 'react';
import './style.css';
import CardItem from '../CardItem/index';
import projects from '../../utils/json';

function Card() {
  return (
    <div className='card'>
      <h1>Check out some of my work!</h1>
      <div className='card-container'>
        <div className='card-wrapper'>
          <ul className='card-items'>
            {projects.map( (project, i) => {
              return(
              <CardItem
                key={i}
                src={project.src}
                text={project.text}
                title={project.title}
                label={project.label}
                path={project.path}
                link={project.link}
              />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;