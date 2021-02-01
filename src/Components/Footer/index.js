import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/ButtonBase';
import "./style.css";

export default function Footer() {
    return (
        <section className="footer">
            <section className="footer-title">
                Social Medias
            </section>

            <section className="footer-icons">
                <Button href="https://github.com/DevDan13">
                    <GitHubIcon />
                </Button>

                <Button href="https://www.linkedin.com/in/daniel-cintron-2b93581b5/">
                    <LinkedInIcon />
                </Button>

                <Button href="https://twitter.com/YourSalvation88">
                    <TwitterIcon />
                </Button>

                <Button href="https://www.facebook.com/daniel.cintron.129/">
                    <FacebookIcon />
                </Button>

                
            </section>

            <section className="footer-copy">
                &copy;Copyright DevDan13 2021
            </section>
        </section>
    )
}
