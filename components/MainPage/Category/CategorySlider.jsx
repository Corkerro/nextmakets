import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import SwiperNavButtons from './SwiperNavButtons';
import { useRouter } from 'next/router';

export default function CategorySlider() {
  const router = useRouter();

  const handleDivClick = (path) => {
    router.push(`/filter?type=${path}`);
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]} // Подключаем модули прямо в компонент Swiper
      observer={true}
      observeParents={true}
      spaceBetween={80}
      autoHeight={false}
      speed={800}
      slidesPerView={'auto'}
      centeredSlides={true}
      loop={true}
      effect={'fade'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      breakpoints={{
        0: {
          spaceBetween: 5,
          slidesPerView: 1,
        },
        400: {
          spaceBetween: 40,
          slidesPerView: 1.5,
        },
        500: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        640: {
          spaceBetween: 40,
          slidesPerView: 1.5,
        },
        780: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        1000: {
          spaceBetween: 60,
          slidesPerView: 2.5,
        },
        1500: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
      className="category__slider">
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('лендинг')}>
        <img src="/img/category/picture_1.jpg" alt="" />
        <h4 className="subtitle">ЛЕНДИНГ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('многостраничник')}>
        <img src="/img/category/picture_2.jpg" alt="" />
        <h4 className="subtitle">МНОГОСТРАНИЧНЫЕ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('магазин')}>
        <img src="/img/category/picture_3.jpg" alt="" />
        <h4 className="subtitle">МАГАЗИНЫ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('лендинг')}>
        <img src="/img/category/picture_1.jpg" alt="" />
        <h4 className="subtitle">ЛЕНДИНГ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('многостраничник')}>
        <img src="/img/category/picture_2.jpg" alt="" />
        <h4 className="subtitle">МНОГОСТРАНИЧНЫЕ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('магазин')}>
        <img src="/img/category/picture_3.jpg" alt="" />
        <h4 className="subtitle">МАГАЗИНЫ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('лендинг')}>
        <img src="/img/category/picture_1.jpg" alt="" />
        <h4 className="subtitle">ЛЕНДИНГ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('многостраничник')}>
        <img src="/img/category/picture_2.jpg" alt="" />
        <h4 className="subtitle">МНОГОСТРАНИЧНЫЕ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('магазин')}>
        <img src="/img/category/picture_3.jpg" alt="" />
        <h4 className="subtitle">МАГАЗИНЫ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('лендинг')}>
        <img src="/img/category/picture_1.jpg" alt="" />
        <h4 className="subtitle">ЛЕНДИНГ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('многостраничник')}>
        <img src="/img/category/picture_2.jpg" alt="" />
        <h4 className="subtitle">МНОГОСТРАНИЧНЫЕ</h4>
      </SwiperSlide>
      <SwiperSlide className="category__slide" onClick={() => handleDivClick('магазин')}>
        <img src="/img/category/picture_3.jpg" alt="" />
        <h4 className="subtitle">МАГАЗИНЫ</h4>
      </SwiperSlide>
      <SwiperNavButtons />
    </Swiper>
  );
}
