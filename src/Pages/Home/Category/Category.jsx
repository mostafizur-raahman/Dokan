import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/category/men.jpeg';
import slide2 from '../../../assets/category/women22.png';
import slide3 from '../../../assets/category/kids.webp';
import slide4 from '../../../assets/category/beauty.jpg';
import slide5 from '../../../assets/category/oil.webp';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
    return (
        <div>
            <SectionTitle heading={"Category"} subHeading={"Order Now"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20 mt-5"
            >
                <SwiperSlide>
                    <img className="lg:h-[300px]" src={slide1} alt="" />
                    <h3 className="text-3xl -mt-20 text-center font-bold text-white">Men</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[300px]" src={slide2} alt="" />
                    <h3 className="text-3xl -mt-20 text-center font-bold text-white">Women</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[300px]" src={slide3} alt="" />
                    <h3 className="text-3xl -mt-20 text-center font-bold text-white">Kids</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[300px]" src={slide4} alt="" />
                    <h3 className="text-3xl -mt-20 text-center font-bold text-white">Beauty</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="lg:h-[300px]"  src={slide5} alt="" />
                    <h3 className="text-3xl -mt-20 text-center font-bold text-white">Mart Dokan</h3>
                </SwiperSlide>
              
               
            </Swiper>
        </div>
    );
};

export default Category;
