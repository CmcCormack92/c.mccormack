import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectList(props) {

  const [projects] = useState([
    {
      name: "Easy Res V2",
      url: 'https://easy-res-v2.herokuapp.com/',
      github: 'https://github.com/robjameva/easy-res-v2'
    },
    {
      name: 'Easy Res',
      url: 'https://easy-res.herokuapp.com/',
      github: 'https://github.com/robjameva/Easy-Res'
    },
    {
      name: 'Open Thoughts',
      url: 'https://open-thoughts.herokuapp.com/',
      github: 'https://github.com/CmcCormack92/open-thoughts',
    },
    {
      name: 'Top Recipes',
      url: 'https://cmccormack92.github.io/top-recipes/',
      github: 'https://github.com/CmcCormack92/top-recipes',
    },
    {
      name: 'Photo Port',
      url: 'http://CmcCormack92.github.io/photo-port',
      github: 'https://github.com/CmcCormack92/photo-port',
    },
    {
      name: 'Run Buddy',
      url: 'https://cmccormack92.github.io/run-buddy/',
      github: 'https://github.com/CmcCormack92/run-buddy',
    },
    {
      name: 'Weather Dashboard',
      url: 'https://cmccormack92.github.io/weather-dashboard/',
      github: 'https://github.com/CmcCormack92/weather-dashboard',
    },
  ]);

  return (
    <div>
      <div className='project'>
        {projects.map((project, i) => (
          <div className='project-img'>
            <div className='image-wrap'>
            <img
              src={require(`../../assets/portfolioImages/${i}.png`)}
              alt={project.name}
              className="screenshot"
              key={project.name}
            />
            </div>
            <a className='project-title' href={project.url} target='_blank'>
            <h2>{project.name}</h2>
            </a>
            <a className='project-git' href={project.github} target='_blank'><FontAwesomeIcon className='project-icon' icon={faGithub} /></a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectList;