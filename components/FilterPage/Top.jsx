import React from 'react';

export default function Top({ number }) {
  return (
    <div className="filtertop">
      <div className="filtertop__container">
        <h1>Каталог макетов</h1>
        <p className="filtertop__text">
          Мы тщательно отобрали и отсортировали самый лучший материал. Здесь вы сможете найти именно
          такой макет, который вам нужен.
        </p>
        <p className="filtertop__number number">({number})</p>
      </div>
      <img src="/img/filter/bg.svg" alt="" className="filtertop__bg" />
    </div>
  );
}
