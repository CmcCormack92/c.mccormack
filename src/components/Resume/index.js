import React from 'react';
import resume from "../../assets/resumeImg/portfolioResume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Resume() {
    return (
        <section className='resume'>
            <div className='download-wrapper'>
                <a href={resume}> <span><FontAwesomeIcon icon={faDownload} /></span>Download resume here</a>
            </div>
            <div className='front-end'>
                <ul>
                    <h2>Front End Proficiencies</h2>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div className='back-end'>
                <ul>
                    <h2>Back End Proficiencies</h2>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>Sequilize</li>
                    <li>NoSQL</li>
                    <li>Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;