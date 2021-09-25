import React from 'react'
import Separator from '../../common/separator/Separator'
import { WorkData } from '../../data/work'
import './experience.css'
import WorkCard from './WorkCard'

export default function Experience() {
    const data = WorkData
    return (
        <div className='work'>
            <Separator/>
            <label className='section-title'>Work Experience</label>
            <div className='work-list'>
                {data.map((item) => {
                    return(
                        <WorkCard item = {item} />
                    );
                })}
            </div>
        </div>
    )
}
