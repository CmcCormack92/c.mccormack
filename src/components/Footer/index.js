import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";




function Footer() {
    return (
        <footer>
                <div>
                    <a href='https://github.com/CmcCormack92' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/christopher-mccormack-59a59321b/' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                    </a>
                </div>
                <div>
                    <a href='mailto:chrismack135@gmail.com' target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                    </a>
                </div>
        </footer>
    );
}


export default Footer;