import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import Link from 'next/link';

export default function About({ features, likes, id, images, link, addLike }) {
  const [liked, setLiked] = useState(false);
  const [myLikes, setMyLikes] = useState(likes + 1);
  useEffect(() => {
    // Проверяем, есть ли id в localStorage при загрузке страницы
    const likedMakets = JSON.parse(localStorage.getItem('likedMakets')) || [];
    const isLiked = likedMakets.includes(id);
    setLiked(isLiked);
  }, [id]);

  const handleLikeClick = () => {
    // Обновляем состояние liked
    setLiked((prevLiked) => !prevLiked);
    // localStorage.removeItem('likedMakets');
  };

  useEffect(() => {
    // Сохраняем состояние liked в localStorage при каждом изменении
    const likedMakets = JSON.parse(localStorage.getItem('likedMakets')) || [];

    if (liked) {
      // Если id отсутствует в массиве, добавляем его
      if (!likedMakets.includes(id)) {
        likedMakets.push(id);
        addLike(id);
        localStorage.setItem('likedMakets', JSON.stringify(likedMakets));
      }
    } else {
      // Если id уже присутствует в массиве, не удаляем его
      if (likedMakets.includes(id)) {
        return;
      }
    }
  }, [id, liked]);

  const [isWindowSize1270, setWindowSize1270] = useState(false);
  const [isWindowSize600, setWindowSize600] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize1270(window.innerWidth >= 1270);
      setWindowSize600(window.innerWidth >= 600);
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояний
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const swiperDiv = (
    <Swiper
      modules={[Navigation, Autoplay]} // Подключаем модули прямо в компонент Swiper
      observer={true}
      observeParents={true}
      spaceBetween={80}
      autoHeight={false}
      speed={800}
      slidesPerView={'auto'}
      loop={true}
      effect={'fade'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          spaceBetween: 5,
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 0.8,
          spaceBetween: 10,
        },
        730: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1270: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        1470: {
          slidesPerView: 1.8,
          spaceBetween: 40,
        },
        1600: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
      }}
      className="cabout__slider">
      {images.slice(1).map((item, index) => (
        <React.Fragment key={index}>
          {index > 0}
          <SwiperSlide className="cabout__slide">
            <img src={item} alt="" />
          </SwiperSlide>
        </React.Fragment>
      ))}
      {images.slice(1).map((item, index) => (
        <React.Fragment key={index}>
          {index > 0}
          <SwiperSlide className="cabout__slide">
            <img src={item} alt="" />
          </SwiperSlide>
        </React.Fragment>
      ))}
    </Swiper>
  );
  return (
    <div className="cabout">
      <div className="cabout__container">
        {isWindowSize1270 ? <h4 className="subtitle">О макете</h4> : ''}
        <div className="cabout__features">
          {isWindowSize1270 ? '' : <h4 className="subtitle">О макете</h4>}
          <ul>
            {features.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0}
                <li className="text-1">
                  <a href={`#${item}`}>
                    <img src="/img/cabout/check.svg" alt="" /> {item}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
          {isWindowSize600 ? '' : swiperDiv}
          <div className="cabout__features_buttons">
            <div className="cabout__features_likes" onClick={handleLikeClick}>
              <div className="cabout__features_wrapper">
                <img src="/img/cabout/like.svg" alt="" className={`licked ${liked ? '' : 'dn'}`} />{' '}
                <img src="/img/cabout/nolike.svg" alt="" className="unlicked" />{' '}
              </div>
              {liked ? likes : likes - 1}
            </div>
            <a href={link} className="button">
              ОТКРЫТЬ МАКЕТ
            </a>
          </div>
        </div>
        {isWindowSize600 ? swiperDiv : ''}
      </div>
    </div>
  );
}
