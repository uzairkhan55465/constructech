import React from 'react';
import Hero1 from "../../../assets/Images/hero1.png";
import Hero2 from "../../../assets/Images/hero2.png";
import Arrow from "../../../assets/Images/Arrow.svg";

const HeroPage = () => {
  return (
    <div>
      <div className="relative h-screen bg-[#0A0909] flex items-center justify-center text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-[31px] xl:px-[70px] flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col pt-[120px] mt-16 space-y-4 w-full md:w-[64%] lg:w-[46%] items-center md:items-start">
            <p className='font-normal text-white text-base sm:text-lg font-poppins'>HI THERE!</p>
            <h1 className="font-poppins text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-[800] w-full w-[90%] lg:w-[75%] pb-5 text-center md:text-left">
              We’re a catalyst of the <span className="text-yellow-500">digital change</span> you long for
            </h1>
            <div className='flex flex-col relative md:flex-row pt-14 pb-[70px] mb-[200px] space-y-4 md:space-y-0 lg:ps-12 space-x-6 lg:space-x-14 items-center md:items-start'>
              <div className='flex items-center relative'>
                <h1 className='text-[#F4A31D] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal font-poppins'>Services</h1>
                <img src={Arrow} alt='' className='ms-4 w-[20px] sm:w-[25px] md:w-[28px] lg:w-[30px] xl:w-[32px]' />
                <div className='absolute md:left-[106px] lg:left-[115px] xl:left-[126px] top-[50%] translate-y-[-50%] rounded-full border-2 border-[#F4A31D] p-[10px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px]'></div>
              </div>
              <div className='flex items-center relative'>
                <h1 className='text-[#F4A31D] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal font-poppins'>Get a quote</h1>
                <img src={Arrow} alt='' className='ms-4 w-[20px] sm:w-[25px] md:w-[28px] lg:w-[30px] xl:w-[32px]' />
                <div className='absolute md:left-[142px] lg:left-[154px] xl:left-[168px] top-[50%] translate-y-[-50%] rounded-full border-2 border-[#F4A31D] p-[10px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px]'></div>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-[54%] flex justify-center items-center pt-10">
            <img src={Hero1} alt="Image 1" className="absolute z-50 w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] xl:w-[330px] h-[180px] sm:h-[200px] md:h-[230px] lg:h-[260px] xl:h-[330px] rounded-full right-0 md:right-[100px] lg:right-[140px] xl:right-[180px]" />
            <img src={Hero2} alt="Image 2" className="absolute w-[150px] sm:w-[170px] md:w-[200px] lg:w-[230px] xl:w-[280px] h-[150px] sm:h-[170px] md:h-[200px] lg:h-[230px] xl:h-[280px] mt-[-130px] md:mt-[-110px] lg:mt-[-130px] xl:mt-[-150px] right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
