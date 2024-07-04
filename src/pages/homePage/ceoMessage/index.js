import React from 'react';
import CEO from "../../../assets/Images/ceo.png"
import CEO1 from "../../../assets/Images/ceo1.svg"
import CEO2 from "../../../assets/Images/ceo2.svg"
import Linkedin from "../../../assets/Images/linkedin.svg"
const CeoMessage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  p-4 ">
      <img src={CEO1} className="absolute top-[-1px] left-0  w-[450px] h-[400px] "></img>
      
      <img src={CEO2} className="absolute bottom-[230px] right-0  w-[430px] h-[570px] "></img>
      
      <div className="relative flex flex-col   pt-14  px-[120px]">
        <h1 className="text-5xl font-bold text-center leading-[63px] font-poppins">CEO <br/> MESSAGE</h1>
        
        <div className="my-6">
          <div className="w-8 h-8 bg-[#F4A31D] rounded-full mx-auto"></div>
          <div className="w-1 bg-[#F4A31D] h-[310px] mx-auto"></div>
        </div>

        <h1 className="text-center text-[#000000] text-[26px] font-[600]  mx-[130px] mb-4 font-poppins">
          In an ever-evolving construction industry, we understand the challenges and complexities that general contractors face daily.
        </h1>
        <p className="text-start my-12 text-[#000000] font-normal  text-[20px] w-[60%] ms-[140px] font-poppins">
          At <span className="font-normal text-[#F4A31D]">Constructech</span>, our mission is to empower Construction Companies like yours with the resources and support needed to thrive in today's competitive landscape. Cultivating strong relationships within the Construction and engineering sector is vital to achieving our common goals: Cost Efficiency, Expertise, Reliability, Time Savings and Quality Assurance.
        </p>
        <div className='flex justify-end w-full'>
        <p className=" my-12 text-[#000000] font-normal  text-[20px] w-[60%] font-poppins">
          I invite you to explore our range of services and get in touch. Whether it’s a new project or ongoing work, we have the solution that perfectly fits your requirements.
        </p>
        </div>
      
        <p className="text-center py-7 font-normal text-[#F4A31D] text-[35px] font-poppins">
          Together, we can build a brighter future <br /> for your construction projects
        </p> 
        
        <div className="flex items-center justify-center mt-10 mb-8">
          <img className="w-[190px] h-[190px] rounded-full me-5" src={CEO} alt="" />
          <div>
            <p className="font-bold text-[19px] font-poppins">Syed Samulullah Shah</p>
            <p className="font-normal text-[18px] font-poppins">CEO</p>
            <p className='text-[#626262] font-normal text-[17px] font-poppins'>CONSTRUCTECH-PAKISTAN</p>
            <img className="w-9 h-9 rounded-full ms-[-5px] mt-1" src={Linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
