import { useEffect, useRef, useState } from 'react';

export default function News() {
  const [isWindowSize1350, setWindowSize1350] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize1350(window.innerWidth >= 1350);
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояний
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imgRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const imgElement = imgRef.current;
      if (imgElement) {
        const parallaxMultiplier = parseInt(imgElement.getAttribute('data-parallax')) / 100 || 0.5;
        const scrollPosition = window.pageYOffset;
        imgElement.style.transform = `translateY(${scrollPosition * parallaxMultiplier}px)`;
      }
    };

    handleScroll(); // Вызываем функцию сразу для инициализации параллакса
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="news">
      <div className="news__container">
        <h4 className="subtitle">Новости</h4>
        <div className="news__content">
          <img
            data-paralax
            ref={imgRef}
            className="news__content_bg"
            src="/img/news/bg.jpg"
            alt=""
          />
          <div className="news__wrapper">
            <div className="news__block">
              <h4 className="subtitle">Конкурс</h4>
              <p className="text-3">
                Мы предлагаем вам создать уникальный дизайн для веб-сайта с использованием Figma. Вы
                можете проявить свою креативность, экспериментировать с цветами, композицией и
                типографикой. Будьте свободны в своем вдохновении и представьте нам удивительный
                дизайн, который будет визуально привлекателен и функционален.
              </p>
              <ul>
                <li className="italic">
                  <img src="/img/news/hart.svg" alt="" />
                  Инновационность
                </li>
                <li className="italic">
                  <img src="/img/news/settings.svg" alt="" />
                  Визуальный эффект
                </li>
                <li className="italic">
                  <img src="/img/news/like.svg" alt="" />
                  Функциональность
                </li>
              </ul>
              <p className="text-1 news__block_date">
                Дедлайн: 30 июня 2023 г.
                {isWindowSize1350 ? (
                  ''
                ) : (
                  <a data-da=".news__block_date,1350" href="#" className="news__button button">
                    УЧАСТВОВАТЬ
                  </a>
                )}
              </p>
            </div>
            {isWindowSize1350 ? (
              <a data-da=".news__block_date,1350" href="#" className="news__button button">
                УЧАСТВОВАТЬ
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
