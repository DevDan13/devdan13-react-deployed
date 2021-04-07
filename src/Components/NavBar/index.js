import "./style.css";
import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">About</Link>
            <Link to="/portfolio" className="navbar-item">Portfolio</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
            <a className="navbar-item" href="https://docs.google.com/document/d/1MvNxu8OJf5GQrOzbybnVOsGEvslyo-XqFOXcd1gAQJc/export?format=pdf">Resume</a>

        </section>
    )
}
