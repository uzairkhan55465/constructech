import { TimelineData } from "../../../constant/servicetimeline"
import { useState } from "react";
const OurServices = () => {
    const [activeId, setActiveId] = useState(1);
    const handleSetActiveId = (id) => {
        setActiveId(id);
    };
    return (
        <div className="bg-[#0A0909] px-[120px] py-12">
             <div className="flex pt-[60px] pb-[120px] ps-[37px]">
                <span className="h-[.3px] w-16 bg-[#ffffff] mt-4 me-5"></span>
                <h1 className="text-white text-[20px] font-normal ">OUR SERVICES</h1>
            </div>
            <div className="flex">
                <div className="h-[130vh] flex flex-col justify-between me-3">
                    <div className="text-white text-[20px] font-[600] pt-8"   onClick={() => handleSetActiveId(1)}>01</div>
                    <div className="text-white text-[20px] font-[600] mt-[150px]"   onClick={() => handleSetActiveId(2)}>02</div>
                    <div className="text-white text-[20px] font-[600] mt-[150px]"   onClick={() => handleSetActiveId(3)}>03</div>
                </div>
                <div className="bg-white w-[.5px] h-[170vh] mb-10"></div>
                <div className="flex flex-col relative">

                    {TimelineData.map((data, index) => (
                        <div
                            key={data.id}
                            className={`bg-white px-1 h-[110px] absolute ${activeId === 1 ? ' left-[-3px] ' : activeId === 2 ? "top-[33%] left-[-3px]" : "top-[67%] left-[-3px]"}`}
                            onClick={() => setActiveId(data.id)}
                        >

                        </div>
                    ))}
                </div>
               <div className={` px-8 ${activeId === 1 ? "flex items-start" : activeId === 2 ? "flex items-center mt-[-80px]" : activeId === 3 ? "flex items-end mb-[60px]" : ""}`}>
                    {TimelineData.map((data) => (
                        <div key={data.id} className={`${activeId === data.id ? 'block' : 'hidden'}`}>
                            <div className="flex">
                                <div className="w-[41%]">
                                    <h2 className="text-4xl text-white font-bold mb-4">{data.title}</h2>
                                    <p className="mb-4 text-white ">{data.description}</p>
                                </div>
                                <div className="flex w-[59%] relative">
                                    <div className="mt-[-40px]">
                                        <img src={data.img} alt="" className="w-[330px] h-[330px]" />
                                    </div>
                                    <div className="absolute top-[77px] right-[-60px]">
                                        <ul
                                            className="w-[480px] h-[180px] flex flex-wrap p-6 justify-between"
                                            style={{ backgroundImage: data.gradient }}
                                        >
                                            {data.items.map((item, index) => (
                                                <li key={index} className="flex items-center w-[50%] mb-4 text-white">
                                                    <img src={data.Arrow} alt="" className="w-8 h-8" />
                                                    <h6 className="text-[17px]">{item}</h6>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>



                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OurServices;