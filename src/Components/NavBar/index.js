import "./style.css";
import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <section>
            <Link to="/" className="navbar-item">About</Link>
            <Link to="/portfolio" className="navbar-item">Portfolio</Link>
        </section>
    )
}
