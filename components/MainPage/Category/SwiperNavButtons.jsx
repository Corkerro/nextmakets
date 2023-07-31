import React from 'react';
import { useSwiper } from 'swiper/react';
export default function SwiperNavButtons() {
  const swiper = useSwiper();
  return (
    <div className="category__navigation swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()} className="swiper-button-prev">
        <img src="/img/category/arrow.svg" alt="" />
      </button>
      <button onClick={() => swiper.slideNext()} className="swiper-button-next">
        <img src="/img/category/arrow.svg" alt="" />
      </button>
    </div>
  );
}
