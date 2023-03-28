import React from 'react';
import "./about.css";
import AboutImg from "../../assets/Selfe 2.jpg";
import CV from "../../assets/Sunil_CV.pdf";
import Info from './Info';
import ButtonIcon from '../Icons/buttonIcon';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section_title'>About Me</h2>
      <span className='section_subtitle'>My Introduction</span>

      <div className='about_container container grid'>
        <img src={AboutImg} alt="" className='about_img' />
        <div className='about_data'>
          <Info />

          <p className='about_description'>Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>

          <a download="" href={CV} className="button button--flex">Download CV <ButtonIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
