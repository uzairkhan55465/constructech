import { useState } from "react";
import { AboutTabs } from "../../../constant/aboutTabs"
import { SnapshotData } from "../../../constant/aboutSnapshots"
const AboutPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="bg-[#0A0909] px-[120px] py-12">
            <div className="flex ps-[100px]">
                <span className="h-[.3px] w-16 bg-[#FFFFFF] mt-4 me-5"></span>
                <h1 className="text-[#FFFFFF] text-[20px] font-normal ">ABOUT</h1>
            </div>
            <div className="flex justify-center w-[100%] pt-[80px]">
                <p className="text-white  text-[18px] font-normal ">At Constructech ,we provide expert Pre- Construction Services, <br /> including Estimating, Scope development, Bidding, Scheduling, and <br /> Procurement Management. Trust our experienced team to bring your <br /> construction project to life. Contact us today to learn more.
                </p>
            </div>

            <div className="ps-[140px] pt-16 mt-14 pb-5">
                <p className="text-white  text-[21px] font-normal w-[74%]">We are a team of passionate construction consultants & technology
                    Veterans egar to help companies reach their full potential</p>
            </div>
            <div className="flex flex-col items-center pt-16 mt-16 min-h-screen  text-white">
                <div className="flex space-x-8 mb-6">
                    {AboutTabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer px-8 py-3 text-white text-[21px] rounded-lg ${activeTab === index ? 'bg-gradient-to-r from-[#FFA800] via-[#CEA85E] to-[#1C1B1A]' : ''
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </div>
                    ))}
                </div>
                <div className="relative flex items-center justify-center w-full h-24 mb-6">
                    <div className="absolute left-[150px] top-[130px] w-[130px] h-[130px] rounded-full bg-gradient-to-r from-[#FF983C] to-[#AF631F]"></div>
                    <div className="absolute right-[174px] top-[7px] w-[130px] h-[130px] rounded-full bg-gradient-to-r from-[#FF983C] to-[#AF631F]"></div>
                    <div className="z-10 px-12 flex items-center mt-[190px] bg-gradient-to-r from-[#726f6d] via-[#504f4f] to-[#3b3a3a]  rounded-xl shadow-[0_4px_24px_-1px_rgba(0,0,0,1)] w-[58%] text-center h-[160px] backdrop-blur-lg">
                        {AboutTabs[activeTab].content}
                    </div>
                </div>
                <div className=" pt-[160px] mt-16 flex justify-end w-full ">
                    <p className="w-[69%] text-end text-[19px]"> We are a forward-thinking Agency for Agencies/Studios that supports people and businesses to achieve their life-long ambitions. We respect their goals as partners and help them with effective, sustainable, and inspiring solutions.</p>

                </div>
            </div>
            <div className="mt-10 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex ps-[100px] pb-16 mb-4">
                        <span className="h-[.3px] w-16 bg-[#AFACAC] mt-4 me-5"></span>
                        <h1 className="text-[#AFACAC] text-[20px] font-normal ">COMPANY SNAPSHOTS</h1>
                    </div>
                    <div className="flex justify-end w-[92%]">
                        <div className="grid grid-cols-2 gap-16">
                            {SnapshotData.map((item, index) => (
                                <div key={index} className="pe-8 pb-1">
                                    <div className="text-[60px] font-semibold ">{item.value}</div>
                                    <div className="text-xl text-[F9F8F8] font-[300]">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;