import React from 'react';
import AI_img from '../../assets/img.png'; // Ensure the image path and file extension are correct
import './home.css';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Main content takes the remaining screen space */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* First section with text */}
                <div
                    className="w-full md:w-1/2 flex flex-col items-center p-4 bg-[#081944] text-white"
                    style={{ fontFamily: 'Playfair Display, serif', alignItems: 'center' }} >
                    <div
                        className=" flex flex-col justify-center items-center p-4 bg-[#081944] text-white"
                        style={{
                            marginTop: '15rem',
                            fontFamily:
                                'Mona Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji',
                        }}>
                        <h1
                            className="mb-8 lg:mb-12 text-center"
                            style={{
                                fontSize: '4rem', // Set heading font size to 4rem
                                lineHeight: '4.5rem', // Set line height to 4.5rem
                                fontFamily: 'Playfair Display, serif',
                            }}
                        >
                            From Human Intelligence to Artificial Intelligence
                        </h1>
                    </div>

                    <div>   <p className=" text-blue-200 text-base md:text-lg lg:text-xl max-w-3xl text-center leading-relaxed color:#3d3c3c">
                        HItoAI Limited is an AI-driven company dedicated to developing and implementing cutting-edge AI
                        technologies across various business sectors. Our mission is to transform business operations with innovative AI solutions that enhance efficiency, productivity, and growth.
                    </p></div>

                </div>

                {/* Second section with image */}
                <div
                    className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#081944]"
                >
                    <img
                        src={AI_img}
                        alt="AI Illustration"
                        className="w-full h-auto max-w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
