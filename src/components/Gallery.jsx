import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="flex justify-center">
        <h1 className="text-3xl text-center pt-10">CONCEPT ART GALLERY</h1>
      </div>
      <div className="w-full py-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/8.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/9.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://vietsukieuhung.com/wp-content/uploads/2021/06/10.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
