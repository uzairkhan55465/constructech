import Slider from 'react-slick';
import { ImagesSlider } from "../../../constant/sliderImages"
const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
    };

    return (
        <div className='ps-[120px] bg-[#0A0909] py-16'>
            <Slider {...settings}>
                {ImagesSlider.map((images, index) => (
                    <div key={index}>
                        <img src={images.img} alt={`slide ${index}`} className="w-[315px]" />
                    </div>
                ))}
            </Slider>
        </div>

    )
}
export default ImageSlider;