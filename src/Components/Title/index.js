import "./style.css";
import React from 'react'

export default function Title(props) {
    const {title} = props;
    return (
        <section>
            {title}
        </section>
    )
}
