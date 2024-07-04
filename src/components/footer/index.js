import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import logo from "../../assets/Images/logo.svg";
import buildingImage from '../../assets/Images/footer.png';
import buildingImageHover from '../../assets/Images/fooeterhover.png';

const Footer = () => {
    const [buildingHovered, setBuildingHovered] = useState(false);
    const [iconHovered, setIconHovered] = useState(null);

    const handleIconHover = (iconName) => {
        setIconHovered(iconName);
    };

    const clearIconHover = () => {
        setIconHovered(null);
    };

    return (
        <footer className="bg-[#0A0909] text-white py-12 h-[100vh] relative">
            <div className="container mx-auto px-[10px] lg:px-[80px] xl:px-[120px] flex flex-col md:flex-row justify-between relative">
    
                <div className="mb-8 md:mb-0">
                    <div className='mx-14 mb-2'>
                        <img src={logo} alt="Constructech Logo" className="h-[130px] mb-4" />
                    </div>

                    <span className="self-center tracking-extra-wide text-[22px] font-[400] ms-[-5px] whitespace-nowrap text-white leading-4">CONSTRUCTECH</span>
                    <p className="mb-3 pt-8 font-poppins">info@constructtech.org</p>
                    <p className="mb-3 font-poppins">858-629-4520</p>
                    <p className="mb-3 font-poppins">Office 69-72, Ground Floor Pace MT, <br /> Model Town Link Road, Lahore</p>
                    <p className="mb-3 font-poppins">24/7 Services</p>
                    <div className="flex space-x-4 mt-9">
                        <FaFacebookSquare
                            style={iconHovered === 'facebook' ? { color: '#F4A31D' } : { color: 'white' }}
                            onMouseEnter={() => handleIconHover('facebook')}
                            onMouseLeave={clearIconHover}
                            className='w-6 h-6'
                        />
                        <FaInstagram
                            style={iconHovered === 'instagram' ? { color: '#F4A31D' } : { color: 'white' }}
                            onMouseEnter={() => handleIconHover('instagram')}
                            onMouseLeave={clearIconHover}
                            className='w-6 h-6'
                        />
                        <FaTwitter
                            style={iconHovered === 'twitter' ? { color: '#F4A31D' } : { color: 'white' }}
                            onMouseEnter={() => handleIconHover('twitter')}
                            onMouseLeave={clearIconHover}
                            className='w-6 h-6'
                        />
                        <FaYoutube
                            style={iconHovered === 'youtube' ? { color: '#F4A31D' } : { color: 'white' }}
                            onMouseEnter={() => handleIconHover('youtube')}
                            onMouseLeave={clearIconHover}
                            className='w-6 h-6'
                        />
                        <FaTiktok
                            style={iconHovered === 'tiktok' ? { color: '#F4A31D' } : { color: 'white' }}
                            onMouseEnter={() => handleIconHover('tiktok')}
                            onMouseLeave={clearIconHover}
                            className='w-6 h-6'
                        />
                    </div>
                </div>

                <div className="mb-8 mt-8 md:mb-0 ms-10">
                    <h2 className="font-normal text-[20px] mb-10 ">OVERGEAR</h2>
                    <ul>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">About us</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Work with us</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Studio</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Contact us</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Get help</a></li>
                    </ul>
                </div>

                <div className="mb-8 mt-8 md:mb-0">
                    <h2 className="font-normal text-[20px] mb-10">LEGAL</h2>
                    <ul>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Terms & Conditions</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Privacy Policy</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Refund Policy</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">Cookies Policy</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-[#F4A31D] font-poppins">End User License Agreement</a></li>
                    </ul>
                </div>

            </div>
            <div className='relative w-full '>
                <img
                    src={buildingHovered ? buildingImageHover : buildingImage}
                    alt="Building"
                    className="absolute bottom-[0px] lg:bottom-[0px] xl:bottom-[-81px] right-0 w-[45%] h-auto object-cover transition"
                    onMouseEnter={() => setBuildingHovered(true)}
                    onMouseLeave={() => setBuildingHovered(false)}
                />
            </div>
        </footer>
    );
};

export default Footer;
