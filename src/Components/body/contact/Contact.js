import React from 'react'
import Separator from '../../common/separator/Separator'
import SocialContact from '../../common/social-links/SocialContact'
import './contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact me on any of the platforms</p>
                    <SocialContact/>
                </div>
                <div className='download'>
                    <a download href={require('../../../assets/Jerin_Software_Developer.pdf').default}>
                        <i className="fa fa-download download-icon"></i> Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}
