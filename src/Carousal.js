import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import pic1 from './images/full stack course.png';
import pic2 from './images/GAO 1.png';
import pic3 from './images/GAO 2.png';
import pic4 from './images/GAO 3.png';
import pic5 from './images/PRODIGY.png';


const Carousel = () => {
  return (
    <div className="achievements container lg-12 md-12 sm-12">
        <h1>My Achievements</h1>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        700: { slidesPerView: 2 }, // 2 images for iPads and desktops
      }}
      navigation
      pagination={{ clickable:true}}
      autoplay={{ delay: 2000 }}
      className="mySwiper container w-100 h-100vh lg-12 md-12 sm-12 flex flex-row justify-content-center align-items-center"
    >
     
      <SwiperSlide>
       <img src={pic2} alt="zoom" width="550px" height="450px"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic3} alt="zoom" width="550px" height="450px" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={pic4} alt="zoom" width="550px" height="450px"/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={pic5} alt="zoom" width="350px" height="450px"/>
      </SwiperSlide>
      <SwiperSlide style={{margin:"60px",width:"1050px"}}>
        <img src={pic1} alt="zoom" width="750px" height="450px"/>
      </SwiperSlide>

</Swiper>
</div>
  );
};

export default Carousel;
