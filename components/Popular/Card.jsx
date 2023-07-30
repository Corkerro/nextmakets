import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
const formatDate = (dateString) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', options).format(date);
};

export default function Card({
  id,
  link,
  image,
  type,
  language,
  color,
  price,
  title,
  date,
  level,
  adaptive,
  number,
  selected,
  toggle,
}) {
  const isOpen = selected == number;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="popular__spollers_item spollers__item">
        <button
          onClick={() => {
            toggle(number);
          }}
          type="button"
          data-spoller
          className={
            isOpen ? 'popular__spollers_title _spoller-active' : 'popular__spollers_title'
          }>
          <div className="popular__spollers-number-bold">0{number}</div>
          <h3>
            {title}
            <span></span>
          </h3>
        </button>
        <Collapse isOpened={isOpen}>
          <div className={`popular__spollers_body`}>
            <div className="popular__spollers_body-wrapper">
              <img
                data-da=".popular__spollers_body-block-2, 500, 1"
                src={`${image}`}
                alt=""
                className="popular__spollers_body-img"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
              />
              <div className="popular__spollers_body-block popular__spollers_body-block-2">
                <p className="text-1 popular__spollers_body-top">{formatDate(date)}</p>
                <ul className="popular__spollers_body-info">
                  <li>
                    Уровень сложности: <a href="#">{level}</a>
                  </li>
                  <li>
                    Тип:{' '}
                    {JSON.parse(type).map((item, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && ', '}
                        <a href={`#${item}`}>{item}</a>
                      </React.Fragment>
                    ))}
                  </li>
                  <li>
                    Адаптивность: <a href="#">{adaptive}</a>
                  </li>
                  <li>
                    Язык:{' '}
                    {JSON.parse(language).map((item, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && ', '}
                        <a href={`#${item}`}>{item}</a>
                      </React.Fragment>
                    ))}
                  </li>
                  <li>
                    Цветовая тема:{' '}
                    {JSON.parse(color).map((item, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && ', '}
                        <a href={`#${item}`}>{item}</a>
                      </React.Fragment>
                    ))}
                  </li>
                  <li>
                    Цена макета: <a href="#">~{price}₽</a>
                  </li>
                </ul>
                <a
                  href={`/maket/${id}`}
                  onMouseEnter={() => {
                    if (window.innerWidth > 640) {
                      setIsHovered(true);
                    }
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className="popular__spollers_body-button button">
                  Открыть
                </a>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
