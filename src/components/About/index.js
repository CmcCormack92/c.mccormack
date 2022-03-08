import React from 'react';
import aboutImage from "../../assets/aboutImg/self-img.JPG";

function About() {
    return (
        <section className='about-me'>
            <div className="img-wrapper">
                <img src={aboutImage} alt="self image" />
            </div>
            <div className='p-wrap'>
            <p>
             Hello! My name is Chris, I am a full stack developer located in the Greater Tampa Bay Area.
             <br/>
             <br/>
             Wanting to change my career, I thought it would be impossible to find something that i truely enjoyed. That is until I wrote 'Hello World!', from there it all changed.
             <br/>
             <br/>
             Specializing in the MERN stack, I have built many different applications on both the front and back end. Please visit my GitHub using the link on the bottom of the page to view them all!
             
            </p>
            </div>
            
        </section>
    );
}

export default About;