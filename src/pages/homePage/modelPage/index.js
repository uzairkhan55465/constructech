import React from 'react';
import { ModelPoints } from "../../../constant/modelData";

const ModelPage = () => {
    return (
        <div className="bg-[#0A0909] px-[120px] py-12">
             <div className="flex ps-[45px] pb-8 pt-[90px]">
                <span className="h-[.3px] w-16 bg-[#FFFFFF] mt-4 me-5"></span>
                <h1 className="text-[#FFFFFF] text-[20px] font-normalfont-poppins ">MODEL</h1>
            </div>
            <h1 className="text-[29px] md:text-[33px] lg:text-[35px] xl:text-[37px] font-[400px] ps-[136px] pb-16 my-12 text-white font-timesNewRoman">Get things done tailored to <br/> your needs</h1>
            <div className='flex justify-center lg:justify-end w-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] md:w-[85%] lg:w-[70%]">
                    {ModelPoints.map((point, index) => (
                        <div
                            key={index}
                            className="p-4 mb-16"
                        >
                            <div className="text-white  transition-colors duration-500 hover:text-[#F4A31D]">
                                <div className='flex pb-12'>
                                    <p className='ms-[-70px] pe-5 pt-[2px] flex items-center'>{point.id}</p>
                                    <h2 className="text-[28px] md:text-[30px] lg:text-[33px] font-normal font-timesNewRoman">{point.title}</h2>
                                </div>

                                <p className="text-[20px] mt-[-5px] font-normal w-[75%] font-timesNewRoman">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ModelPage;
