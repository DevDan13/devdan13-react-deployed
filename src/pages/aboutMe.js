import React from 'react'
import jsIcon from "../images/javascript.svg";
import reactIcon from "../images/react.svg";
import codeIcon from "../images/code.svg";
import "./styles/about.css";

export default function AboutMe() {
    return (
        <div className="container">

            <section className="resume">
                {/* pdf resume link here */} Resume
            </section>


            <p className="about-text-body">Hello I'm Daniel Cintron, Full Stack Web developer with a passion to solve problems and communicate ideas and solutions with others.  Throughout My development experience I have learned a number of coding languages and libraries.  Among these are HTML5 <span><img className="code-icon" src={codeIcon} alt="code" /></span>, CSS3, Javascript <span><img className="code-icon" src={jsIcon} alt="Javascript" /></span>, JQuery, react <span><img className="code-icon" src={reactIcon} alt="react" /></span>,MongoDB, MySQL, and Express.
            </p>

            <img className="image-wrapper" src="https://pbs.twimg.com/profile_images/765396515443634176/D6vkGTQE_400x400.jpg" alt="Daniel Cintron" />


        </div>
    )
}
