import React from 'react';
import aboutImage from "../../assets/aboutImg/self-img.JPG";

function About() {
    return (
        <section className='about-me'>
            <div className="img-wrapper">
                <img src={aboutImage} alt="self image" />
            </div>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla alias est maxime voluptatem commodi esse temporibus autem repellat quia adipisci cupiditate labore possimus quos repudiandae voluptate, dolor ipsa itaque? Porro!
            </p>
            
        </section>
    );
}

export default About;