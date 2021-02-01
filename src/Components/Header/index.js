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

        </section>

    )
}
