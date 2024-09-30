import React from "react";
import Slider from "react-slick";
import "./team.css";

const TeamPage = ({ sliderData }) => {
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    const GalleryPrevArrow = ({ ...props }) => {
        const { onClick } = props;

        return (
            <div {...props} className="custom-prevArrow" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </div>
        );
    };

    const GalleryNextArrow = ({ ...props }) => {
        const { onClick } = props;

        return (
            <div {...props} className="custom-nextArrow" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </div>
        );
    };

    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <div className="bg-white min-h-screen flex flex-col justify-center items-center py-20 px-12">
            <h2 className="text-5xl font-bold text-center mb-16">Our Team</h2>
            <Slider {...settings}>
                {sliderData.map((member, index) => {
                    return (
                        <div key={index} className="team-card">
                            <img src={member.image} alt=''className="team-image" />
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-position">{member.position}</p>
                                <p className="team-description">{member.description}</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default TeamPage;
