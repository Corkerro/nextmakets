import React, { useState, useEffect } from 'react';

export default function Main({ color, description, title, images, type, level, adaptive, link }) {
  const [isWindowSize1200, setWindowSize1200] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize1200(window.innerWidth >= 1200);
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояний
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="cmain">
      <div className="cmain__container">
        <div className="cmain__left">
          <h1>{title}</h1>
          <ul>
            {JSON.parse(type).map((item, index) => (
              <React.Fragment key={index}>
                {index > 0}
                <li className="subtitle-italic">
                  <a href={`/filter?type=${item}`}># {item}</a>
                </li>
              </React.Fragment>
            ))}
            {color.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0}
                <li className="subtitle-italic">
                  <a href={`/filter?color=${item}`}># {item}</a>
                </li>
              </React.Fragment>
            ))}
            <li className="subtitle-italic">
              <a href={`/filter?level=${level}`}># {level}</a>
            </li>
            <li className="subtitle-italic">
              <a href={`/filter?adaptive=${adaptive}`}># {adaptive}</a>
            </li>
          </ul>
          <p>{description}</p>
          {isWindowSize1200 ? '' : <img src={images[0]} alt="" className="cmain__right" />}
          <div className="cmain__buttons">
            <a href={link} className="button">
              Открыть
            </a>
            <a href="/filter/" className="button cmain__buttons_button">
              Посмотреть еще
            </a>
          </div>
        </div>
        {isWindowSize1200 ? <img src={images[0]} alt="" className="cmain__right" /> : ''}
      </div>
      <div className="cmain__marquee">
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
    </div>
  );
}
