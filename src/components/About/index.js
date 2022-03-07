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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla alias est maxime voluptatem commodi esse temporibus autem repellat quia adipisci cupiditate labore possimus quos repudiandae voluptate, dolor ipsa itaque? Porro!
            </p>
            </div>
            
        </section>
    );
}

export default About;