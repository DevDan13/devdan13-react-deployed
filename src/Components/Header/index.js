import React from "react";
import NavBar from "../NavBar/index";
import "./style.css";

export default function Header() {
    return (
        <section className="header">

            <section className="header-top">
                <section className="header-top-title">
                    <a href="/" className="header-title">Daniel Cintron</a>
                </section>

                <section className="header-top-NavBar">
                    <section className="header-top-navigate">
                        <NavBar />
                    </section>
                </section>
            </section>

            <section className="header-top-seperator"></section>

            <section className="header-bottom">
                <section className="header-bottom-github">
                    <a href="https://github.com/DevDan13" alt="DevDan13">DevDan13</a>
                </section>

                <section className="header-bottom-resume">
                    {/* pdf resume link here */}
                </section>

                <section className="header-bottom-email">
                    dan1397732@gmail.com
                </section>
            </section>

        </section>

    )
}
