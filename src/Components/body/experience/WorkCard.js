import React from 'react'
import './work-card.css'

export default function WorkCard({ item }) {
    return (
        <div className='work-card'>
            <div className='work-info'>
                <label className='company-name'>{item.company}</label>
                <div className='work-dates'>
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className='work-desc'>
                    <p>{item.work}</p>
                </div>
            </div>
            <img
                src = {item.companyLogo}
                alt = {item.company}
                className = 'work-logo'
            />
        </div>
    )
}
