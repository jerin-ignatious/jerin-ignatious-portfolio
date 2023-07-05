import React from 'react'
import SocialContact from '../../common/social-links/SocialContact'
import './about.css'

export default function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-photo'>
                    <img
                        src = {require('../../../assets/pfp.jpg').default}
                        className='picture'
                        alt='jerin'
                    />
                </div>
                <div className='about-info'>
                    Hello there! I'm <br/>
                    <span className='info-name'>Jerin Ignatious</span>, <br/>
                    a Backend Developer with some Frontend experience.
                </div>
            </div>
            <div className='about-bottom'>
                <SocialContact/>
            </div>
        </div>
    )
}
