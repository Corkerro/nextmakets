import React from 'react';
import Card from './Card';

export default function Similar({ similar }) {
  const data = similar.data;

  return (
    <div className="similar">
      <div className="similar__container">
        <div className="similar__top">
          <h4 className="subtitle">Похожие макеты</h4>
          <a href="/filter">Посмотреть ещё</a>
        </div>

        <div className="similar__content">
          {data.map((card) => (
            <Card key={card.id} id={card.id} image={card.image} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
