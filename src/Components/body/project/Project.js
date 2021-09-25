import React from 'react'
import Separator from '../../common/separator/Separator';
import { ProjectData } from '../../data/projects'
import './project.css'
import ProjectCard from './ProjectCard';

export default function Project() {
    const data = ProjectData;
    return (
        <div className='project'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((item) => {
                    return (
                        <ProjectCard item = {item}/>
                    );
                })}
            </div>
        </div>
    )
}
