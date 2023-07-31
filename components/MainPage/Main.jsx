import { useEffect, useRef, useState } from 'react';
import PopupVideo from './PopupVideo';

export default function Main() {
  const [isWindowSize1390, setWindowSize1390] = useState(false);
  const [isWindowSize600, setWindowSize600] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize1390(window.innerWidth >= 1390);
      setWindowSize600(window.innerWidth >= 600);
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояний
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [popupOpen, setPopupOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const handleLinkClick = (videoId) => {
    setVideoId(videoId);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const button = (
    <a href="#" onClick={() => handleLinkClick('s4m68uiXQ1U')} className="link main__top_top-a">
      <img src="/img/main/button.svg" alt="" />
    </a>
  );

  const buttonTelegram = (
    <a data-da=".main__picture, 600" className="main__picture_a" href="https://t.me/figmamakets/7">
      <img src="/img/main/telegram.svg" alt="" />
      <span className="text-1">ПЕРЕЙТИ В ТЕЛЕГРАМ</span>
    </a>
  );

  const paragraph = (
    <p data-da=".main__text,1390" className="text-1 main__top_down-text">
      Один из самых качественных и тщательно отобранных сборников макетов Figma. У нас вы найдете
      образовательный материал, который поможет вам дополнить портфолио и повысить свои скиллы!
    </p>
  );

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

  useEffect(() => {
    if (popupOpen) {
      document.documentElement.classList.add('lock');
      document.documentElement.classList.add('popup-show');
    } else {
      document.documentElement.classList.remove('popup-show');
      setTimeout(() => {
        document.documentElement.classList.remove('lock');
      }, 300);
    }
  }, [popupOpen]);
  return (
    <section className="main">
      {popupOpen && <PopupVideo videoId={videoId} onClose={closePopup} />}
      <div className="main__container">
        <div className="main__top">
          <div className="main__top_top">
            <h1>
              СБОРНИК <span>ЛУЧШИХ</span>
            </h1>
            {isWindowSize1390 ? button : ''}
          </div>
          <div className="main__top_down">
            <h1>МАКЕТОВ FIGMA</h1>

            {isWindowSize1390 ? '' : button}
            {isWindowSize1390 ? paragraph : ''}
          </div>
          <div className="main__text">{isWindowSize1390 ? '' : paragraph}</div>
        </div>
        <div className="main__tags">
          <ul>
            <li>
              <a href="#" className="subtitle-italic">
                # лендинг
              </a>
            </li>
            <li>
              <a href="#" className="subtitle-italic">
                # интернет-магазин
              </a>
            </li>
            <li>
              <a href="#" className="subtitle-italic">
                # корпоративный
              </a>
            </li>
          </ul>
          <div className="main__tags_line">
            <div></div>
            <img src="/img/main/shine_2.svg" alt="" />
          </div>
        </div>
        <div className="main__picture">
          <div className="main__picture_wrapper">
            <img
              ref={imgRef}
              data-paralax
              src="/img/main/mentis abstract.jpg"
              alt=""
              className="main__picture_img"
            />
            {isWindowSize600 ? buttonTelegram : ''}
          </div>
          {isWindowSize600 ? '' : buttonTelegram}
        </div>
        <div className="main__marquee">
          <div className="main__marquee_wrapper">
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
            <div className="main__marquee_item">
              <span className="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src="/img/main/portal.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
