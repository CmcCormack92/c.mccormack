import React from 'react';
import aboutImage from "../../assets/aboutImg/self-img.JPG";

function About() {
    return (
        <section className='about-me'>
            <div className="img-wrapper">
                <img src={aboutImage} alt="self image" />
            </div>
            <p>
                I'm a Front End Web developer located in sunny Tampa Bay, Florida.
                As a father of three (six if you count dogs), most of my time outside of work is happily spent with
                family.
                But on the occasion that i do get some time to myself, you can find me at the beach, biking or even
                just relaxing with a good book.
            </p>
        </section>
    );
}

export default About;