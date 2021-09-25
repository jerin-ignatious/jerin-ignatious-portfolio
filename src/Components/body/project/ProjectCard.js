import React from 'react'
import './project-card.css'

export default function ProjectCard({item}) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{item.title}</label>
                <div className='project-links'>
                    {item.demo&&(
                        <a className='project-link' href={item.demo}>
                            <div className='link-button'>
                                <i className="fa fa-globe"></i>Demo
                            </div>
                        </a>
                    )}
                    {item.github&&(
                        <a className='project-link' href={item.github}>
                            <div className='link-button'>
                                <i className="devicon-github-original"></i>GitHub
                            </div>
                        </a>
                    )}
                </div>
                <p>{item.about}</p>
                <div className='project-tags'>
                    {item.tags.map((tag) => {
                        return(
                            <label className='tag'>
                                {tag}
                            </label>
                        );
                    })}
                </div>
            </div>
            <img
                src = {item.image}
                className='project-photo'
                alt={item.title}
            />
        </div>
    )
}
