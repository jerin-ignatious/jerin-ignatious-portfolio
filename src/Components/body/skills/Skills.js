import React from 'react'
import Separator from '../../common/separator/Separator'
import { SkillsData } from '../../data/skills'
import SkillCard from './SkillCard';
import './skills.css'

export default function Skills() {
    const data = SkillsData;
    return (
        <div className='skills'>
            <Separator/>
            <label className='section-title'>Skills</label>
            <div className='skills-container'>
                {data.map((item) => {
                    return(
                        <div className='skills-section'>
                            <label className='skills-section-title'>{item.type}</label>
                            <div className='skills-list'>
                                {item.list.map((skill) => {
                                    return(
                                        <SkillCard skill = {skill}/>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
