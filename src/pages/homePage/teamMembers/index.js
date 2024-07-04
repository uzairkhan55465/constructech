import React from 'react';
import Slider from 'react-slick';
import Linkedin from "../../../assets/Images/linkedin.svg"
import {teamMembers} from "../../../constant/teamMembers"
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='relative'>
            <div
                className="absolute top-[-481px] right-4 transform -translate-y-1/2 bg-white border-2 border-[#F4A31D] rounded-full p-3 cursor-pointer"
                onClick={onClick}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
        </div>

    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='relative'>
            <div
                className="absolute top-[-78px] right-[86px] transform -translate-y-1/2 bg-white border-2 border-[#F4A31D] rounded-full p-3 cursor-pointer"
                onClick={onClick}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            </div>
        </div>

    );
};

const TeamCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative  mx-auto px-[120px] py-16 mt-14">
            <div className="flex ps-[100px] pb-16 mb-3">
                <span className="h-[.3px] w-16 bg-[#000000] mt-4 me-5"></span>
                <h1 className="text-[#000000] text-[20px] font-normal font-poppins">OUR TEAM</h1>
            </div>
            <div className="flex flex-col items-center  mb-8">
                <h2 className="text-start text-[37px] font-normal font-timesNewRoman ps-2">Construtech isn’t a team  it’s  a  family</h2>
                <p className="text-start text-[18px] text-[#000000] pt-4 pb-8 ps-3 w-[50%]">Welcome to our digital team, pushing  ideas all the way</p>
            </div>
            <Slider {...settings}>
                {teamMembers.map((member, index) => (
                    <div key={index} className="px-4 py-8">
                        <div className="bg-[#D9D9D9] flex flex-col justify-center items-center rounded-lg shadow-lg mx-3 p-6 text-center h-[340px]" >
                            <img
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className="text-xl font-semibold font-poppins">{member.name}</h3>
                            <p className="text-gray-600 font-poppins">{member.title}</p>
                            <p className="text-gray-600 font-poppins">{member.location}</p>
                            <div className="mt-4 flex justify-end w-full">
                               <img src={Linkedin} alt=''className='w-8 h-8'/>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamCarousel;
