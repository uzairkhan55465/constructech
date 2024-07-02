import React from 'react'
import Header from '../../../components/header'
import Hero1 from "../../../assets/Images/hero1.png"
import Hero2 from "../../../assets/Images/hero2.png"
import Arrow from "../../../assets/Images/Arrow.svg"

const HeroPage = () => {

    return (
        <div >
            <Header />
            <div className="relative h-screen bg-[#0A0909] flex items-center justify-center text-white">
                <div className="container mx-auto  px-[71px] flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col space-y-4 w-[46%]">
                        <p className='font-normal text-white text-lg'> HI THERE! </p>
                        <h1 className="text-[52px] font-[800] w-[75%] pb-5">

                            We’re a catalyst of the <span className="text-yellow-500">digital change</span> you long for
                        </h1>
                        <div className='flex pt-6 ps-12'>
                            <div className='flex'>
                                <h1 className='text-[#F4A31D] text-[20px] font-normal'>Services</h1>
                               
                                <img src={Arrow} alt='' className='ms-4 w-[30px]'/>
                                <div className='relative'>
                                <div className='absolute left-[-19px] rounded  rounded-full border-2 border-[#F4A31D] p-[13px]'></div>
                                </div>
                            </div>
                            <div className='flex ms-14'>
                                <h1 className='text-[#F4A31D] text-[20px] font-normal'>Get a quote</h1>
                               
                                <img src={Arrow} alt='' className='ms-4 w-[30px]'/>
                                <div className='relative'>
                                <div className='absolute left-[-19px] rounded  rounded-full border-2 border-[#F4A31D] p-[13px]'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[54%] flex justify-center items-center pt-10">

                        <img src={Hero1} alt="Image 1" className="absolute z-50  w-[330px] right-[180px] h-[330px] rounded-full" />
                        <img src={Hero2} alt="Image 2" className=" absolute mt-[-150px] right-0 w-[280px] h-[280px] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage