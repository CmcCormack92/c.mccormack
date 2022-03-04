import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";




function Footer() {
    return (
        <footer>
                <div>
                    <a>
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                    </a>
                </div>
                <div>
                    <a>
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                    </a>
                </div>
                <div>
                    <a>
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                    </a>
                </div>
        </footer>
    );
}


export default Footer;