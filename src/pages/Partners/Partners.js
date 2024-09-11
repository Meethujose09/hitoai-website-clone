import React from "react";
import './partners.css';
import ScrollAnimation from "react-animate-on-scroll";
import Data from '../../partners.json';
export default function Partners() {

    return (
        <div className="slider-container flex-col min-h-screen items-center justify-center ">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
                <h1 className="mb-8 lg:mb-12 text-center"
                            style={{
                                fontSize: '4rem', // Set heading font size to 4rem
                                lineHeight: '4.5rem', // Set line height to 4.5rem
                                fontFamily: 'Playfair Display, serif',
                            }} >Our  Partners</h1>
            </ScrollAnimation>
            <div className="hard-skills flex items-center justify-center "style={{ padding: '50px' }}>
                {Data.map((slide, index) => (
                    <div className="hability">

                        <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                            <img src={slide.image} alt="React" />
                        </ScrollAnimation>
                    </div>

                ))}
            

            </div>
            <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
                    <h1 className="mb-8 lg:mb-12 text-center"
                            style={{
                                fontSize: '4rem', // Set heading font size to 4rem
                                lineHeight: '4.5rem', // Set line height to 4.5rem
                                fontFamily: 'Playfair Display, serif',
                            }} >Our Investors and Accelerators</h1>
                </ScrollAnimation>
                <div className="hard-skills flex items-center justify-center "style={{ padding: '50px' }}>
                    {Data.map((slide, index) => (
                        <div className="hability">

                            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                                <img src={slide.image} alt="React" />
                            </ScrollAnimation>
                        </div>

                    ))}



                </div>

        </div>
    );
}


