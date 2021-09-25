import React from 'react'
import About from './about/About'
import Experience from './experience/Experience'
import Skills from './skills/Skills'
import Project from './project/Project'
import Contact from './contact/Contact'
import './body.css'

export default function Body() {
    return (
        <div className='body'>
            <section id='about'>
                <About/>
            </section>
            <section id='experience'>
                <Experience/>
            </section>
            <section id='skills'>
                <Skills/>
            </section>
            <section id='project'>
                <Project/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </div>
    )
}
