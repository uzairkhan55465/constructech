import { FeaturesData } from "../../../constant/featurelist"
const OurFeaturePage = () => {
    return (
        <div className="bg-white px-[120px] py-16 mt-10">
            <div className="flex ps-[100px]">
                <span className="h-[.3px] w-16 bg-[#000000] mt-4 me-5"></span>
                <h1 className=" text-[20px] font-normal font-poppins">OUR FEATURE</h1>
            </div>
            <div className="flex justify-center w-[100%] pt-[34px]">
                <p className="text-[24px] md:text-[29px] lg:text-[31px] xl:text-[33px] font-[500]  font-timesNewRoman  text-start md:w-[60%] lg:w-[55%] xl:w-[52%]">We Specialize In Preparing Quantities
                    Take-off, Cost Estimates As Well As
                    Material Takeoffs And Material Lists For
                    Every Construction Trade.
                </p>
            </div>

            <div className="flex justify-center pt-16 mt-3  pb-5">
                <p className="text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-normal text-center w-[74%] font-poppins"> One Of Our Construction Estimators Will Quantify From The Blueprints, All the Materials & Accessories Needed For Your Trade. It Will Be In Microsoft Excel Sheet Or Any Format
                    You Need, So You Can Send It Out To Bid Quickly. We Specialize in Providing Our Customers With Following Features.</p>
            </div>

            <div className=" text-black py-16">
                <div className=" px-4">
                    <div className="flex justify-center lg:justify-end xl:justify-end w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-end w-[90%]  md:w-[83%] lg:w-[68%] xl:w-[63%]">
                        {FeaturesData.map((item, index) => (
                            <div key={index} className="flex flex-col  text-start mb-12">
                                <div className="flex justify-center items-center bg-[#F4A31D] p-6 rounded-full mb-4 w-[115px] h-[115px]">
                                    <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
                                </div>
                                <div className="text-[17px] md:text-[19px] lg:text-[21px] xl:text-[22px] text-start font-bold mb-2 pt-6 font-timesNewRoman">{item.title}</div>
                                <div className="text-[17px] w-[85%]  md:w-[82%] lg:w-[74%%] xl:w-[66%] font-poppins ">{item.description}</div>
                            </div>
                        ))}
                    </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}
export default OurFeaturePage;